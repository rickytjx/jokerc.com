import type { PropsWithChildren } from 'react'
import React from 'react'
import clsx from 'clsx'

function tagRenderer(name: string) {
  return ((props) => {
    const { children, className, ...rest } = props
    return React.createElement(
      name,
      { ...rest, className: clsx(`mdx-${name}`, className) },
      children,
    )
  }) as React.FC<PropsWithChildren<HTMLElement>>
}

export default tagRenderer
