import React from 'react'
import history, { getPathName } from './history'

export default C => () => (<C history={history} location={{ pathname: getPathName() }} />)
