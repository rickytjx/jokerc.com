import type { PropsWithChildren } from 'react'
import React from 'react'

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative w-full min-h-[calc(100vh-50px)] sm:min-h-[calc(100vh-80px)]">
      {children}
    </div>
  )
}

export default PageContainer
