import React from 'react'
import clsx from 'clsx'
import { ExternalLink } from './icons'

const Link: React.FC<JSX.IntrinsicElements['a'] & { arrow?: boolean }> = (props) => {
  const { className, href = '', arrow = true, children, ...rest } = props
  const isPlainAnchor = typeof children === 'string'

  if (!href.startsWith('http')) {
    return (
      <a className={clsx(className, 'mdx-a')} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(className, 'group/a mdx-a')}
      {...rest}
    >
      {children}
      {isPlainAnchor && arrow && (
        <ExternalLink
          className="inline-block mx-0.5 text-[0.9em] -translate-y-px text-zinc-400 group-hover/a:text-current transition-colors"
          aria-hidden
        />
      )}
    </a>
  )
}

export default Link
