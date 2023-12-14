import type { PropsWithChildren } from 'react'
import React, { createContext } from 'react'

export interface SevenSegmentDisplayContext {
  digitSize: number
  segmentThickness: number
  segmentSpacing: number
  segmentActiveColor: string
  segmentInactiveColor: string
  glow: boolean
}

export interface SevenSegmentDisplayProviderProps extends SevenSegmentDisplayContext {}

// eslint-disable-next-line ts/no-redeclare
export const SevenSegmentDisplayContext = createContext({} as SevenSegmentDisplayContext)

const SevenSegmentDisplayProvider: React.FC<
  PropsWithChildren<SevenSegmentDisplayProviderProps>
> = (props) => {
  const { children, ...rest } = props

  return (
    <SevenSegmentDisplayContext.Provider value={rest}>
      {children}
    </SevenSegmentDisplayContext.Provider>
  )
}

export default SevenSegmentDisplayProvider
