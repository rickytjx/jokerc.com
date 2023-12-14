'use client'

import React, { useContext } from 'react'
import { PostViewsContext } from './Provider'
import Spinner from '@/components/Spinner'
import { prettifyNumber } from '@/utils'

function PostViews() {
  const { views, isLoading } = useContext(PostViewsContext)

  if (isLoading)
    return <Spinner />

  return <>{ prettifyNumber(views) }</>
}

export default PostViews
