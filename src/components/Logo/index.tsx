import React from 'react'
import classNames from "classnames"

import ForumLogoIcon from 'assets/forum-dots.svg'
import ForumLogoTextIcon from 'assets/forum-logo-text.svg'

import './Logo.scss'

type LogoProps = { condensed: boolean }

const Logo = ({ condensed }: LogoProps) => {
  const className: string = classNames('Logo', {
    'Logo--condensed': condensed
  })

  return (
    <div className={className}>
      <div className="Logo__Icon">
        <img src={ForumLogoIcon} width="26" height="26"/>
      </div>
      <div className="Logo__Text">
        <img src={ForumLogoTextIcon} width="89" height="21" />
      </div>
    </div>
  )
}

export default Logo