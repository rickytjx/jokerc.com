'use client'

import type { PropsWithChildren } from 'react'
import React, { createContext, useEffect, useState } from 'react'
import fetcher from '@/lib/fetcher'
import { getSiteUrl } from '@/utils/url'
import { sleep } from '@/utils'
import useBoolean from '@/hooks/useBoolean'

export interface PostViewsContext {
  views: number
  isLoading: boolean
}

export interface PostViewsProviderProps {
  slug: string
}

export const PostViewsContext = createContext({} as PostViewsContext)

const PostViewsProvider: React.FC<PropsWithChildren<PostViewsProviderProps>> = (props) => {
  const { children, slug } = props
  const [views, setViews] = useState(0)
  const [isLoading, { set: setIsLoading }] = useBoolean(true)

  useEffect(() => {
    setIsLoading(true)
    // eslint-disable-next-line node/prefer-global/process
    if (process.env.NODE_ENV === 'production') {
      fetcher<{ pv: number }>(getSiteUrl(`/api/views/${slug}`), { method: 'PATCH' })
        .then((res) => {
          setViews(res.pv)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    else {
      sleep(200)
        .then(() => setViews(1024))
        .finally(() => {
          setIsLoading(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <PostViewsContext.Provider value={{ views, isLoading }}>{children}</PostViewsContext.Provider>
  )
}

export default PostViewsProvider
