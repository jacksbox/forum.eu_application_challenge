import React from 'react'
import classNames from 'classnames'

import './NavButton.scss'

const NavButton = ({ active, hidden = false, children }) => {
  const className = classNames('NavButton', {
    'NavButton--active': active,
    'NavButton--hidden': hidden
  })
  return <div className={className}>{children}</div>
}

export default NavButton