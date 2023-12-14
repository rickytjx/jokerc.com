import type { PropsWithChildren } from 'react'
import React, { createContext } from 'react'
import useBoolean from '@/hooks/useBoolean'

export interface ConfigContext {
  soundEnabled?: boolean
  setSoundEnabled?: (enabled: boolean) => void
}

// eslint-disable-next-line ts/no-redeclare
export const ConfigContext = createContext({} as ConfigContext)

const ConfigProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [soundEnabled, { set: setSoundEnabled }] = useBoolean(true)

  return (
    <ConfigContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
