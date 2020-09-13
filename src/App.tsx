import React from 'react'

import withScrollListener from 'HOC/withScrollListener'

import Header from 'components/Header'
import ContentSection from 'components/ContentSection'

import "main.scss"

type AppProps = { scrollPos: number }

const App = ({ scrollPos = 0 }: AppProps) => {

  return (
    <div className="page">
        <Header scrollPos={scrollPos} />
        <ContentSection scrollPos={scrollPos} />
    </div>
  )
}

export default withScrollListener(App)