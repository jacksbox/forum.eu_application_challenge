import React from 'react'
import classNames from 'classnames'

import './ContentSection.scss'

const ContentSection = ({ scrollPos }) => {
  const className = classNames('ContentSection',{
    'ContentSection--isScrolled': scrollPos > 0
  })
  return (
    <div className={className}>
      <div className="container">ContentSection</div>
    </div>
  )
}

export default ContentSection