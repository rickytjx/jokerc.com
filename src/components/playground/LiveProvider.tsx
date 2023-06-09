import { useControllableValue } from 'ahooks'
import type { PropsWithChildren } from 'react'
import React, { createContext, useState } from 'react'
import type Highlight from 'prism-react-renderer'

export type Language = React.ComponentProps<typeof Highlight>['language']
export type LogType = 'log' | 'warn' | 'error'
export interface Log { message: any[]; type: LogType }

export interface LiveProviderProps {
  code?: string
  defaultCode?: string
  language: Language
  // 目前仅在 language=jsx 时生效
  scope?: Record<string, any>
  onCodeChange?: (code: string) => void
}

export interface Context {
  code: string
  setCode: (code: React.SetStateAction<string>, ...args: any[]) => void
  language: Language
  logs: Log[]
  setLogs: React.Dispatch<React.SetStateAction<Log[]>>
  scope: Record<string, any>
}

export const LiveContext = createContext<Context>({} as Context)

const LiveProvider: React.FC<PropsWithChildren<LiveProviderProps>> = (props) => {
  const { children, language, scope = {} } = props
  const [code, setCode] = useControllableValue(props, {
    defaultValue: '',
    defaultValuePropName: 'defaultCode',
    valuePropName: 'code',
    trigger: 'onCodeChange',
  })

  const [logs, setLogs] = useState<Log[]>([
    { message: [1, 'string', null, undefined, { a: 123, b: 456 }, new Date(), true], type: 'log' },
    { message: ['this is a warn message'], type: 'warn' },
    { message: ['this is an error message'], type: 'error' },
    { message: ['this is an error message'], type: 'error' },
  ])

  function onCodeChange(newCode: string) {
    setCode(newCode)
  }

  return (
    <LiveContext.Provider
      value={{
        code,
        setCode,
        language,
        logs,
        setLogs,
        scope,
      }}
    >
      {children}
    </LiveContext.Provider>
  )
}

export default LiveProvider
