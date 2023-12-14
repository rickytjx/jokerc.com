import type { PropsWithChildren } from 'react'
import React from 'react'

const DesktopOnly: React.FC<PropsWithChildren> = (props) => {
  return <div className="hidden sm:contents">{props.children}</div>
}

export default DesktopOnly
