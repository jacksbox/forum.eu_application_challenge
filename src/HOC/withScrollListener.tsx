import React, { useState, useEffect} from 'react'

const withScrollListener = (WrappedComponent: React.ComponentType): React.ComponentType => {
  const ScrollListener = (props: any): React.ReactNode => {
    const [scrollPos, setScrollPos] = useState<number>(window.pageYOffset)

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const handleScroll = ():void  => {
      const pos: number = window.pageYOffset
      setScrollPos(pos)
    }

    return <WrappedComponent {...props} scrollPos={scrollPos} />
  }

  return ScrollListener
}



export default withScrollListener