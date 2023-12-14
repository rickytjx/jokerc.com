import config from 'config'

export function getSiteUrl(path = '') {
  return new URL(
    path,
    // eslint-disable-next-line node/prefer-global/process
    process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : config.siteUrl,
  )
}
