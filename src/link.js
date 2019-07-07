import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from './history'

export default class extends Component {
  static propTypes = {
    replace: PropTypes.bool,
    to: PropTypes.string.isRequired,
  }

  static defaultProps = {
    replace: false,
  }

  onClick = (e) => {
    e.preventDefault()
    const { replace, to } = this.props
    if (replace) {
      history.replace(to)
    } else {
      history.push(to)
    }
  }

  render() {
    const { to, replace, ...rest } = this.props
    return (
      <a
        href={to}
        onClick={this.onClick}
        {...rest}
      />
    )
  }
}
