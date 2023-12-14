import { useEffect } from 'react'
import useBoolean from './useBoolean'

// https://www.joshwcomeau.com/react/the-perils-of-rehydration/
function useHasMounted() {
  const [hasMounted, { setTrue }] = useBoolean(false)

  useEffect(() => {
    setTrue()
  }, [])

  return hasMounted
}

export default useHasMounted
