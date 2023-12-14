import React from 'react'
import type { EditorProps } from '@/components/CodeBlock/playground/Editor'
import PlaygroundEditor from '@/components/CodeBlock/playground/Editor'

const Editor: React.FC<EditorProps> = (props) => {
  return <PlaygroundEditor {...props} />
}

export default Editor
