import { useEffect, useState } from 'react'

export const useAnimationHeader = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null)

  useEffect(() => {
    let lastPositionY = window.scrollY

    const animationHeader = () => {
      const windowScrollY = window.scrollY
      const direction = windowScrollY > lastPositionY ? 'down' : 'up'
      // I establish a minimum user scroll so as not to affect usability
      if (
        direction !== scrollDirection &&
        (scrollY - lastPositionY > 10 || scrollY - lastPositionY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastPositionY = windowScrollY
    }

    window.addEventListener('scroll', animationHeader)

    return () => {
      window.removeEventListener('scroll', animationHeader)
    }
  }, [scrollDirection])

  return {
    scrollDirection,
  }
}
