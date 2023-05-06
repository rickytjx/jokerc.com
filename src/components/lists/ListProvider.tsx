import type { PropsWithChildren } from 'react'
import React, { createContext } from 'react'

export interface ListProviderProps {
  type: 'ul' | 'ol' | 'tl'
}

export interface ListContext {
  type: ListProviderProps['type']
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ListContext = createContext({} as ListContext)

const ListProvider: React.FC<PropsWithChildren<ListProviderProps>> = (props) => {
  const { children, type } = props

  return <ListContext.Provider value={{ type }}>{children}</ListContext.Provider>
}

export default ListProvider
