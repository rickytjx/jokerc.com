import React from 'react'
import type { IconProps } from './types'

const ExternalLink: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M19 13C19 12.4477 19.4478 12 20 12C20.5522 12 21 12.4477 21 13V14.5C21 18.0898 18.0898 21 14.5 21H9.5C5.91016 21 3 18.0898 3 14.5V9.5C3 5.91016 5.91016 3 9.5 3H11C11.5522 3 12 3.44769 12 4C12 4.55231 11.5522 5 11 5H9.5C7.01465 5 5 7.01471 5 9.5V14.5C5 16.9853 7.01465 19 9.5 19H14.5C16.9854 19 19 16.9853 19 14.5V13Z" />
      <path d="M14 4C14 4.55228 14.4477 5 15 5H17.5857L9.47766 13.108C9.08712 13.4986 9.08714 14.1318 9.47771 14.5223V14.5223C9.86824 14.9128 10.5014 14.9128 10.8919 14.5222L19 6.41412V9C19 9.55228 19.4477 10 20 10V10C20.5523 10 21 9.55228 21 9V3H15C14.4477 3 14 3.44772 14 4V4Z" />
    </svg>
  )
}

export default ExternalLink