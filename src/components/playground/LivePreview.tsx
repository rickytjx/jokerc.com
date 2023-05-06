import React, { useContext } from 'react'
import HtmlPreview from './components/HtmlPreview'
import ReactPreview from './components/ReactPreview'
import { LiveContext } from './LiveProvider'
import type { NativeProps } from '@/utils/native-props'

export interface LiveEditorProps extends NativeProps {}

//  注意，该组件只支持 html 与 jsx
const LivePreview: React.FC<LiveEditorProps> = (props) => {
  const { language, setLogs } = useContext(LiveContext)

  const Preview = {
    html: HtmlPreview,
    jsx: ReactPreview,
  }[language as string]

  function handleConsole(type: any, message: any) {
    setLogs(logs => [...logs, { type, message }])
  }

  return Preview
    ? (
    <Preview
      {...props}
      onConsole={handleConsole}
    />
      )
    : null
}

export default LivePreview
