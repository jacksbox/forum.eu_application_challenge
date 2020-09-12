import React, { useState, useEffect} from 'react'

const withScrollListener = (WrappedComponent) => {
  const ScrollListener = props => {
    const [scrollPos, setScrollPos] = useState(window.pageYOffset)

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const handleScroll = async () => {
      const pos = window.pageYOffset
      setScrollPos(pos)
    }

    return <WrappedComponent {...props} scrollPos={scrollPos} />
  }

  return ScrollListener
}



export default withScrollListener