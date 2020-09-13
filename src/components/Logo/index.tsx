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
        <img src={ForumLogoIcon}/>
      </div>
      <div className="Logo__Text">
        <img src={ForumLogoTextIcon} />
      </div>
    </div>
  )
}

export default Logo