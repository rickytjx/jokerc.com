import { useContext } from 'react'
import { PlaygroundContext } from '@/components/CodeBlock/playground/Provider'

function usePlaygroundContext() {
  return useContext(PlaygroundContext)
}

export default usePlaygroundContext
