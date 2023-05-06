import React from 'react'
import type { LiveEditorProps } from '@/components/playground/LiveEditor'
import LiveEditor from '@/components/playground/LiveEditor'

const Editor: React.FC<LiveEditorProps> = (props) => {
  return <LiveEditor {...props} />
}

export default Editor
