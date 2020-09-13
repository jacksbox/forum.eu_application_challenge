import React, { useState, useEffect} from 'react'

const withScrollListener = (WrappedComponent: React.ReactNode) => {
  const ScrollListener = (props: any) => {
    const [scrollPos, setScrollPos] = useState<number>(window.pageYOffset)

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const handleScroll = async () => {
      const pos: number = window.pageYOffset
      setScrollPos(pos)
    }

    return <WrappedComponent {...props} scrollPos={scrollPos} />
  }

  return ScrollListener
}



export default withScrollListener