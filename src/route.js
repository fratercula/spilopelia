import React from 'react'
import PropTypes from 'prop-types'
import history, { matchPath } from './history'

function Route(props) {
  const {
    component: C,
    pathname,
    path,
  } = props
  const match = matchPath(pathname, path)

  if (!match) {
    return null
  }

  return (
    <C
      match={match}
      location={{ pathname: match.url }}
      history={history}
    />
  )
}

Route.propTypes = {
  component: PropTypes.any.isRequired,
  pathname: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Route
