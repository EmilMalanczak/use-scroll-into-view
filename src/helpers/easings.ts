import { Easing, EasingFunction } from '../types'

export const easeInOutQuad: EasingFunction = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

type GetEasing = (easing: Easing) => EasingFunction
export const getEasing: GetEasing = (easing) => {
  switch (easing) {
    case Easing.easeInOutQuad:
      return easeInOutQuad

    default:
      return easeInOutQuad
  }
}
