import React from 'react'
import type { HTMLPreviewProps } from './previewers/HTMLPreview'
import HTMLPreview from './previewers/HTMLPreview'
import type { ReactPreviewProps } from './previewers/ReactPreview'
import ReactPreview from './previewers/ReactPreview'
import usePlaygroundContext from './usePlaygroundContext'

export type PreviewProps = HTMLPreviewProps & ReactPreviewProps

//  注意，该组件只支持 html 与 jsx
const Preview: React.FC<PreviewProps> = (props) => {
  const { language } = usePlaygroundContext()

  const Preview = {
    html: HTMLPreview,
    jsx: ReactPreview,
  }[language as string]

  function onConsoleReady(_console: Console) {
    // setConsole(console)
  }

  return Preview ? <Preview {...props} onConsoleReady={onConsoleReady} /> : null
}

export default Preview
