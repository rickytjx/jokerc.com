import { useMemo, useRef } from 'react'
import type { SetStateAction } from 'react'
import useMemoizedFn from './useMemoizedFn'
import useForceUpdate from './useForceUpdate'
import { isFunction } from '@/utils'

export interface Options<T> {
  defaultValue?: T
  defaultValuePropName?: string
  valuePropName?: string
  trigger?: string
}
export type Props = Record<string, any>
export interface StandardProps<T> {
  value: T
  defaultValue?: T
  onChange: (val: T) => void
}

function useControllableValue<T = any>(props: StandardProps<T>): [T, (v: SetStateAction<T>) => void]
function useControllableValue<T = any>(
  props?: Props,
  options?: Options<T>,
): [T, (v: SetStateAction<T>, ...args: any[]) => void]
function useControllableValue<T = any>(props: Props = {}, options: Options<T> = {}) {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options

  const value = props[valuePropName] as T
  const isControlled = Object.prototype.hasOwnProperty.call(props, valuePropName)

  const initialValue = useMemo(() => {
    if (isControlled)
      return value

    if (Object.prototype.hasOwnProperty.call(props, defaultValuePropName))
      return props[defaultValuePropName]

    return defaultValue
  }, [])

  const stateRef = useRef(initialValue)
  if (isControlled)
    stateRef.current = value

  const [update] = useForceUpdate()

  function setState(v: SetStateAction<T>, ...args: any[]) {
    const r = isFunction(v) ? v(stateRef.current) : v

    if (!isControlled) {
      stateRef.current = r
      update()
    }
    if (props[trigger])
      props[trigger](r, ...args)
  }

  return [stateRef.current, useMemoizedFn(setState)] as const
}

export default useControllableValue
