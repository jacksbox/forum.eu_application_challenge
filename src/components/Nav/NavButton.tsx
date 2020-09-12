import React from 'react'
import classNames from 'classnames'

import './NavButton.scss'

const NavButton = ({ active, children }) => {
  const className = classNames('NavButton', {
    'NavButton--active': active
  })
  return <div className={className}>{children}</div>
}

export default NavButton