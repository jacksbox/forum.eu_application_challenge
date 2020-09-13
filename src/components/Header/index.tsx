import React, { useEffect, useState, useRef } from 'react'
import classNames from "classnames"

import Logo from 'components/Logo'
import Search from 'components/Search'
import RegisterButton from 'components/RegisterButton'
import Nav from 'components/Nav'

import './Header.scss'

//icon, spacing ||| spacing search spacing button
const occupiedWidth: number = 26 + 26 + 26 + 36 + 20 + 128;

type HeaderPorps = { scrollPos: number }

const Header = ({ scrollPos }: HeaderPorps) => {
  const [availableWidth, setAvailableWidth] = useState<number>(0)

  const isScrolled: boolean = scrollPos > 0
  const headerRef = useRef<HTMLElement | null>()
  const className: string = classNames("Header__Container", {
    "Header--isScrolled": isScrolled
  })

  const handleResize = (): void => {
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