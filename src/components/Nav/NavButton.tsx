import React from 'react'
import classNames from 'classnames'

import './NavButton.scss'

type NavButtonType = {
  active: boolean,
  hidden: boolean,
  children: React.ReactNode
}

const NavButton = ({ active, hidden = false, children }: NavButtonType) => {
  const className: string = classNames('NavButton', {
    'NavButton--active': active,
    'NavButton--hidden': hidden
  })

  return <div className={className}>{children}</div>
}

export default NavButton