import React from 'react' // eslint-disable-line import/no-unresolved
import history, { getPathName } from './history'

export default C => () => (<C history={history} location={{ pathname: getPathName() }} />)
