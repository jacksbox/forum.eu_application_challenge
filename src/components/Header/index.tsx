import React, { useEffect, useState, createRef } from 'react'
import classNames from "classnames"

import Logo from 'components/Logo'
import Search from 'components/Search'
import RegisterButton from 'components/RegisterButton'
import Nav from 'components/Nav'

import './Header.scss'

//icon, spacing ||| spacing search spacing button
const occupiedWidth = 26 + 26 + 26 + 36 + 20 + 128;

const headerRef = createRef()

const Header = ({ scrollPos }) => {
  const [availableWidth, setAvailableWidth] = useState(0)
  const isScrolled = scrollPos > 0
  const className = classNames("Header__Container", {
    "Header--isScrolled": isScrolled
  })

  const handleResize = () => {
    setAvailableWidth(headerRef.current.clientWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="Header">
      <div className={className} ref={headerRef}>
        <div className="Header__Logo Header--item"><Logo condensed={isScrolled}/></div>
        <div className="Header__Search Header--item"><Search condensed={isScrolled}/></div>
        <div className="Header__RegisterButton Header--item"><RegisterButton /></div>
        <div className="Header__Nav"><Nav condensed={isScrolled} availableWidth={availableWidth} occupiedWidth={occupiedWidth}/></div>
      </div>
    </div>
  )
}

export default Header