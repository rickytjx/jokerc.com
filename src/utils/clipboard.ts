export function copyToClipboard(text: string) {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(text)
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('The Clipboard API is not available.')
}
