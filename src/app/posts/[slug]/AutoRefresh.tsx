'use client'

import { useEffect, useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Subject, first, map, of, switchMap } from 'rxjs'
import { visibilityChange$ } from '@/utils/observables'

// eslint-disable-next-line import/no-mutable-exports
let AutoRefresh = function AutoRefresh() {
  return null
}

if (process.env.NODE_ENV === 'development') {
  AutoRefresh = function AutoRefresh() {
    const router = useRouter()
    const pathname = usePathname()
    const subject = useMemo(() => new Subject<void>(), [])

    useEffect(() => {
      const visible$ = visibilityChange$.pipe(map(() => !document.hidden))
      const sub = subject
        .pipe(
          switchMap(() => {
            return document.hidden ? visible$.pipe(first(Boolean)) : of(null)
          }),
        )
        .subscribe(() => {
          router.refresh()
        })
      return () => sub.unsubscribe()
    }, [router, subject])

    useEffect(() => {
      const ws = new WebSocket('ws://localhost:3457')
      ws.onmessage = (evt) => {
        const data = JSON.parse(evt.data) as { cmd: string, body: string }
        if (data.cmd === 'refresh') {
          if (data.body.startsWith(pathname.slice(1)))
            subject.next()
        }
      }
      return () => ws.close()
    }, [router, pathname, subject])

    return null
  }
}

export default AutoRefresh
