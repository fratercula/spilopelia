import { Component, cloneElement, Children } from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import history, { getPathName } from './history'

export default class extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  state = { pathname: getPathName() }

  componentWillMount() {
    this.unlisten = history.listen(() => {
      this.setState({ pathname: getPathName() })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const { children } = this.props
    const { pathname } = this.state

    return Children.map(children, child => cloneElement(child, { pathname }))
  }
}
