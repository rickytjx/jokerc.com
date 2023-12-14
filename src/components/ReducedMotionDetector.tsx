'use client'

import { useEffect } from 'react'
import { Globals, useReducedMotion } from '@react-spring/web'

function ReducedMotionDetector() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    Globals.assign({ skipAnimation: !!reducedMotion })
  }, [reducedMotion])

  return null
}

export default ReducedMotionDetector
