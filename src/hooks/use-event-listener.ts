import { useRef, useEffect } from 'react'

import type { RefObject } from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

type ListenerHandler = (event?: Event) => void

export const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  eventName: keyof WindowEventMap,
  handler: ListenerHandler,
  options?: AddEventListenerOptions,
  element?: RefObject<T>
): void => {
  const savedHandlerRef = useRef<ListenerHandler>(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const targetElement: T | Window = element?.current || window

    const isSupported = targetElement?.addEventListener
    if (!isSupported) return

    const eventListener = (event: Event): void => {
      savedHandlerRef.current(event)
    }

    targetElement.addEventListener(
      eventName,
      eventListener,
      options ?? {
        capture: false,
        passive: true
      }
    )

    // eslint-disable-next-line consistent-return
    return () => targetElement.removeEventListener(eventName, eventListener)
  }, [eventName, element, handler, options])
}
