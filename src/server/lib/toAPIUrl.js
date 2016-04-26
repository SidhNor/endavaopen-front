import config from '../config'

export function toAPIUrl(path) {
  return `${config.webAPIUrl}${path}`
}
