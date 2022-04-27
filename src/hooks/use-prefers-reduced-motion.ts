import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'
const isRenderingOnServer = typeof window === 'undefined'

// For our initial server render, we won't know if the user
// prefers reduced motion, but it doesn't matter. This value
// will be overwritten on the client, before any animations
// occur.
const getInitialState = () => (isRenderingOnServer ? true : !window.matchMedia(QUERY).matches)

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addEventListener('change', listener)

    return () => mediaQueryList.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}
