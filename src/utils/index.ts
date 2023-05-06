import type React from 'react'
import type { DynamicOptions } from 'next/dynamic'
import dynamic from 'next/dynamic'

export function withNoSSR<P = {}>(
  Component: React.ComponentType<P>,
  options = {} as Omit<DynamicOptions<P>, 'ssr'>,
) {
  return dynamic<P>(async () => Promise.resolve(Component), { ...options, ssr: false })
}
