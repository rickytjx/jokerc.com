import React from 'react'
import type { Language } from 'prism-react-renderer'
import config from 'config'
import { scope as builtInScope } from './react-live-scope'
import type { NativeProps } from '@/utils/native-props'
import FencedCodeBlock from '@/components/CodeBlock/FencedCodeBlock'
import CodePlayground from '@/components/CodeBlock/CodePlayground'

export interface CodeBlockProps extends NativeProps {
  children?: string
  live?: boolean
  editor?: boolean
  height?: number
  scope?: Record<string, any>
  highlights?: string
  raw?: boolean
  lineNumbers?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const {
    children,
    className,
    live,
    editor = true,
    scope = {},
    highlights,
    raw,
    lineNumbers = config.markdown.lineNumbers,
  } = props
  const language = className?.replace(/language-/, '') as Language

  if (!children)
    return null
  // 没有语言并且内容结尾不是换行，则表明它是 `code` 写法，而不是代码块
  if (!language && !children.endsWith('\n'))
    return <code className="mdx-code">{children}</code>
  if (!live) {
    return (
      <FencedCodeBlock
        language={language}
        code={children.trim()}
        highlights={highlights}
        raw={raw}
        lineNumbers={lineNumbers}
      />
    )
  }

  return (
    <CodePlayground
      code={children.trim()}
      language={language}
      scope={{ ...builtInScope, ...scope }}
      editor={editor}
      lineNumbers={lineNumbers}
    />
  )
}

export default CodeBlock
