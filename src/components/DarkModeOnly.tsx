import type { PropsWithChildren } from 'react'
import React from 'react'

const DarkModeOnly: React.FC<PropsWithChildren> = (props) => {
  return <div className="hidden dark:contents">{props.children}</div>
}

export default DarkModeOnly
