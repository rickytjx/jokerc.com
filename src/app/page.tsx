import type { PropsWithChildren } from 'react'
import React from 'react'

// import { redirect } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import Splash from '@/components/Splash'
import style from '@/styles/me.module.scss'

const Tag: React.FC<PropsWithChildren> = (props) => {
  return (
    <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      {props.children}
    </span>
  )
}

export default async function Home() {
  // redirect('/posts')

  return (
    <div className="prose-container">
      <Splash />
      <div className={clsx('me pb-12', style.me)}>
        <h2>About me</h2>
        <p>A full-stack development engineer (2013 - present), passionate about open source, working in the toB BI industry, my skills 👇🏻</p>
        <div className="flex items-start flex-wrap gap-2">
          <Tag>Java</Tag>
          <Tag>Vue2/3</Tag>
          <Tag>React</Tag>
          <Tag>Angular2+</Tag>
          <Tag>TypeScript</Tag>
          <Tag>NodeJS</Tag>
          <Tag>Canvas</Tag>
          <Tag>ThreeJS</Tag>
          <Tag>Next.js</Tag>
          <Tag>RxJS</Tag>
          <Tag>UE4/5</Tag>
          ...
        </div>

        <h2>Find me at</h2>
        <ul>
          <li>
            Email -
            {' '}
            <Link href="mailto:m@jokerc.com">m@jokerc.com</Link>
          </li>
          <li>
            Github -
            {' '}
            <Link href="https://github.com/rickytjx">https://github.com/rickytjx</Link>
          </li>
        </ul>

      </div>
    </div>
  )
}
