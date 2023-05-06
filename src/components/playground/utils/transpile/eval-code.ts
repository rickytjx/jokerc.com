function evalCode(code: string, scope: Record<string, any>) {
  const scopeKeys = Object.keys(scope)
  const scopeValues = Object.values(scope)
  // eslint-disable-next-line no-new-func
  return new Function(...scopeKeys, code)(...scopeValues)
}

export default evalCode
