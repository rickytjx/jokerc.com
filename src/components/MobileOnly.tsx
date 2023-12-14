import type { PropsWithChildren } from 'react'
import React from 'react'

const MobileOnly: React.FC<PropsWithChildren> = (props) => {
  return <div className="contents sm:hidden">{props.children}</div>
}

export default MobileOnly
