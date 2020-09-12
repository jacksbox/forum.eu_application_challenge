import React from 'react'
import classNames from 'classnames'

import ContentTopImg from 'assets/content-top.png'
import ContentBottomImg from 'assets/content-bottom.png'

import './ContentSection.scss'

const ContentSection = ({ scrollPos }) => {
  const className = classNames('ContentSection',{
    'ContentSection--isScrolled': scrollPos > 0
  })
  return (
    <div className={className}>
      <div className="container">
        <img src={ContentTopImg} className="ContentSection__Image" width="100%" />
        <img src={ContentBottomImg} className="ContentSection__Image" width="100%" />
      </div>
    </div>
  )
}

export default ContentSection