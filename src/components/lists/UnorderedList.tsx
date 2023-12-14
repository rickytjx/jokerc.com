import React from 'react'
import clsx from 'clsx'
import ListProvider from './ListProvider'

const UnorderedList: React.FC<JSX.IntrinsicElements['ul']> = (props) => {
  const { className = '', ...rest } = props
  const isTaskList = className.includes('contains-task-list')

  return (
    <ListProvider type={isTaskList ? 'tl' : 'ul'}>
      <ul className={clsx(className, 'mdx-ul')} {...rest} />
    </ListProvider>
  )
}

export default UnorderedList
