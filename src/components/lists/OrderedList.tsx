import React from 'react'
import clsx from 'clsx'
import ListProvider from './ListProvider'

const OrderedList: React.FC<JSX.IntrinsicElements['ol']> = (props) => {
  const { className, ...rest } = props

  return (
    <ListProvider type="ol">
      <ol className={clsx(className, 'mdx-ol')} {...rest} />
    </ListProvider>
  )
}

export default OrderedList
