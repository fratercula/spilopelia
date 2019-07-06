import { createHashHistory } from 'history'
import ptr from 'path-to-regexp'

const PREFIX = '__sub_router__'
const history = createHashHistory()
const regex = new RegExp(`${PREFIX}=(.*?)[?&]`)

const getPath = (path) => {
  const { pathname, search } = history.location
  const current = `${pathname}${search}&`
  const match = current.match(regex)

  if (!match) {
    const sub = `${PREFIX}=${path}`
    return `${pathname}${search ? `${search}&${sub}` : `?${sub}`}`
  }

  const result = current.replace(`${PREFIX}=${match[1]}`, `${PREFIX}=${path}`)
  return result.substr(0, result.length - 1)
}

const {
  push,
  replace,
  location,
  ...rest
} = history

const getHistory = {
  ...rest,
  push: path => push(getPath(path)),
  replace: path => replace(getPath(path)),
}

Object.defineProperty(getHistory, 'location', {
  get: () => history.location,
})

export { regex }

export const getPathName = () => {
  const { search } = history.location
  const match = `${search}&`.match(regex)
  return match && match[1] ? match[1] : '/'
}

export const matchPath = (pathname, path) => {
  const keys = []
  const re = ptr(path, keys)
  const match = re.exec(pathname)

  if (!match) {
    return null
  }

  const [url, ...values] = match
  const params = keys.reduce((memo, key, index) => {
    memo[key.name] = values[index] // eslint-disable-line no-param-reassign
    return memo
  }, {})

  return { url, path, params }
}

export default getHistory
