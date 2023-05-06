import type { PropsWithChildren } from 'react'
import React, { createContext, useState } from 'react'

export interface ConfigProviderProps {}

export interface ConfigContext {
  soundEnabled?: boolean
  setSoundEnabled?: (enabled: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ConfigContext = createContext({} as ConfigContext)

const ConfigProvider: React.FC<PropsWithChildren<ConfigProviderProps>> = (props) => {
  const { children } = props
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <ConfigContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
