import React from 'react'

import classNames from 'classnames'

import withScrollListener from 'HOC/withScrollListener'

import Header from 'components/Header'
import ContentSection from 'components/ContentSection'

import "main.scss"

const App = ({ scrollPos = false }) => {

  return (
    <div className="page">
        <Header scrollPos={scrollPos} />
        <ContentSection scrollPos={scrollPos} />
    </div>
  )
}

export default withScrollListener(App)