'use client'

import React, { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { animated, useTransition } from '@react-spring/web'
import {
  animationFrameScheduler,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  pairwise,
  share,
  throttleTime,
  withLatestFrom,
} from 'rxjs'
import { RiArticleLine, RiLightbulbLine, RiPriceTag2Line } from 'react-icons/ri'
import config from 'config'
import DarkModeToggle from './DarkModeToggle'
import MobileOnly from './MobileOnly'
import DesktopOnly from './DesktopOnly'
import useBoolean from '@/hooks/useBoolean'
import useHasMounted from '@/hooks/useHasMounted'
import useTranslation from '@/hooks/useTranslation'

const MobileHeader: React.FC<{
  menus: { label: string, href: string, icon: any }[]
}> = (props) => {
  const { menus } = props

  return (
    <div className="px-6 flex items-center justify-between h-[50px] bg-white dark:bg-zinc-950">
      {/* <BurgerMenuIcon isOpen={expanded} onChange={onBurgerMenuClick} /> */}
      <Link href="/">
        <img
          className="inline-block w-8 mr-4 cursor-pointer dark:invert"
          src={config.logo}
          alt="logo"
        />
      </Link>
      <div className="grid grid-flow-col gap-4">
        {menus.map(menu => (
          <Link className="sm:hidden m-auto text-xl transition-opacity opacity-80 hover:opacity-100" key={menu.href} href={menu.href}>
            {menu.icon}
          </Link>
        ))}
        <div className="m-auto sm:opacity-100 transition-opacity opacity-80 hover:opacity-100">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

const DesktopHeader: React.FC<{ menus: { label: string, href: string }[] }> = ({ menus }) => {
  // const pathname = usePathname()
  // const [{ x: spotX, y: spotY, r: spotR }, onMouseMove] = useSpotlight()

  return (
    <div className="prose-container flex items-center justify-between h-[80px]">
      <Link href="/">
        <img
          className="inline-block w-10 mr-4 cursor-pointer dark:invert"
          src={config.logo}
          alt="logo"
        />
      </Link>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="hidden sm:block m-auto">
            {menus.map(menu => (
              <Link
                key={menu.href}
                href={menu.href}
              >
                <span className="font-medium text-base py-2 px-4 rounded-lg leading-loose transition hover:bg-slate-200/50 dark:hover:bg-zinc-800/50">
                  {menu.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="m-auto sm:opacity-100 transition-opacity opacity-80 hover:opacity-100">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}

function Header() {
  const [visible, { set: setVisible }] = useBoolean(true)
  const { t } = useTranslation()
  const pathname = usePathname()
  const hasMounted = useHasMounted()
  const menus = useMemo(
    () => [
      { label: t('nav.blog'), href: '/posts', icon: <RiArticleLine aria-hidden /> },
      { label: t('nav.project'), href: '/projects', icon: <RiLightbulbLine aria-hidden /> },
      { label: t('nav.tags'), href: '/tags', icon: <RiPriceTag2Line aria-hidden /> },
      // { label: t('nav.friends'), href: '/friends' },
    ],
    [],
  )
  const barTransitions = useTransition(visible, {
    from: hasMounted ? { y: '-100%' } : null,
    enter: { y: '0%' },
    leave: { y: '-100%' },
    config: { tension: 256, friction: 28, clamp: true },
  })

  useEffect(() => {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(0, animationFrameScheduler),
      map(() => window.scrollY),
      share(),
    )
    const dirChange$ = scroll$.pipe(
      pairwise(),
      map(([prev, curr]) => prev > curr),
      distinctUntilChanged(),
      map(() => window.scrollY),
    )
    const sub = scroll$
      .pipe(
        withLatestFrom(dirChange$),
        filter(([scrollY, anchor]) => Math.abs(scrollY - anchor) >= 50),
        map(([scrollY, anchor]) => scrollY <= 500 || scrollY < anchor),
        distinctUntilChanged(),
      )
      .subscribe((v) => {
        setVisible(v)
      })

    return () => sub.unsubscribe()
  }, [])

  useEffect(() => {
    setVisible(true)
  }, [pathname])

  useEffect(() => {
  }, [visible])

  return (
    <header className="relative h-[50px] sm:h-[80px]">
      {barTransitions(
        (barStyles, item) =>
          item && (
            <animated.div
              className="fixed w-full h-[50px] sm:h-[80px] top-0 z-30"
              style={barStyles}
            >
              <MobileOnly>
                <MobileHeader
                  menus={menus}
                />
              </MobileOnly>
              <DesktopOnly>
                <DesktopHeader menus={menus} />
              </DesktopOnly>
            </animated.div>
          ),
      )}
    </header>
  )
}

export default Header
