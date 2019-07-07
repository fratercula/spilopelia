import React from 'react'
import PropTypes from 'prop-types'
import { getPathName, matchPath } from './history'
import Link from './link'

const empty = () => null

function NavLink(props) {
  const {
    activeClassName,
    activeStyle,
    className: classNames,
    isActive: isActiveFn,
    style: styles,
    to,
    ...rest
  } = props
  const pathname = getPathName()
  const match = matchPath(pathname, to)

  const isActive = isActiveFn === empty ? match : isActiveFn(match, { pathname })
  const className = isActive ? `${classNames} ${activeClassName}` : classNames
  const style = isActive ? { ...styles, ...activeStyle } : styles

  return (
    <Link
      style={style}
      className={className}
      to={to}
      {...rest}
    />
  )
}

NavLink.propTypes = {
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  className: PropTypes.string,
  isActive: PropTypes.func,
  style: PropTypes.object,
  to: PropTypes.string.isRequired,
}

NavLink.defaultProps = {
  activeClassName: 'active',
  className: '',
  isActive: empty,
  style: {},
  activeStyle: {},
}

export default NavLink
