import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import { getPathName, matchPath } from './history'
import Link from './link'

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

  const isActive = isActiveFn ? isActiveFn(match, { pathname }) : match
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
  style: {},
  activeStyle: {},
}

export default NavLink
