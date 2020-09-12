import React from 'react'
import classNames from "classnames"

import Logo from 'components/Logo'
import Search from 'components/Search'
import RegisterButton from 'components/RegisterButton'
import Nav from 'components/Nav'

import './Header.scss'

const Header = ({ scrollPos }) => {
  const isScrolled = scrollPos > 0
  const className = classNames("Header__Container", {
    "Header--isScrolled": isScrolled
  })

  return (
    <div className="Header">
      <div className={className}>
        <div className="Header__Logo Header--item"><Logo condensed={isScrolled}/></div>
        <div className="Header__Search Header--item"><Search condensed={isScrolled}/></div>
        <div className="Header__RegisterButton Header--item"><RegisterButton /></div>
        <div className="Header__Nav"><Nav /></div>
      </div>
    </div>
  )
}

export default Header