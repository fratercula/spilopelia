import { Component } from 'react'
import PropTypes from 'prop-types'
import history from './history'

export default class extends Component {
  static propTypes = {
    push: PropTypes.bool,
    to: PropTypes.string.isRequired,
  }

  static defaultProps = {
    push: false,
  }

  componentWillMount() {
    const { push, to } = this.props
    if (push) {
      history.push(to)
    } else {
      history.replace(to)
    }
  }

  render() {
    return null
  }
}
