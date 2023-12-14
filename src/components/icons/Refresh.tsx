import React from 'react'
import type { IconProps } from './types'

const Refresh: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.10685 3.47764C10.7924 2.90546 12.6098 2.84596 14.3292 3.30667C16.0486 3.76738 17.5928 4.72761 18.7665 6.06593C19.3481 6.72912 19.8258 7.4704 20.188 8.26428V5.70055H21.988V12.0006H15.6879V10.2006H18.9714C18.6908 9.11352 18.1587 8.10294 17.4132 7.25277C16.4742 6.18211 15.2389 5.41393 13.8634 5.04536C12.4878 4.67679 11.0339 4.72439 9.68544 5.18213C8.33697 5.63988 7.15452 6.48721 6.28762 7.61698L4.85957 6.52119C5.94319 5.10898 7.42126 4.04982 9.10685 3.47764ZM2.01196 11.9994H8.31205V13.7994H5.02853C5.30912 14.8865 5.84122 15.8971 6.58681 16.7472C7.52575 17.8179 8.76109 18.5861 10.1366 18.9546C11.5121 19.3232 12.9661 19.2756 14.3145 18.8179C15.663 18.3601 16.8454 17.5128 17.7123 16.383L19.1404 17.4788C18.0568 18.891 16.5787 19.9502 14.8931 20.5224C13.2075 21.0945 11.3901 21.154 9.67073 20.6933C7.95132 20.2326 6.40715 19.2724 5.23348 17.9341C4.65187 17.2709 4.17419 16.5296 3.81199 15.7357V18.2994H2.01196V11.9994Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Refresh
