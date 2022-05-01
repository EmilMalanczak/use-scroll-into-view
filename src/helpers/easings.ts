/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */
import { Easing, EasingFunction } from '../types'

// no easing, no acceleration
export const linear: EasingFunction = (t) => t

// accelerating from zero velocity
export const easeInQuad: EasingFunction = (t) => t * t

// decelerating to zero velocity
export const easeOutQuad: EasingFunction = (t) => t * (2 - t)

// acceleration until halfway, then deceleration
export const easeInOutQuad: EasingFunction = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

// accelerating from zero velocity
export const easeInCubic: EasingFunction = (t) => t * t * t

// decelerating to zero velocity
export const easeOutCubic: EasingFunction = (t) => --t * t * t + 1

// acceleration until halfway, then deceleration
export const easeInOutCubic: EasingFunction = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

// accelerating from zero velocity
export const easeInQuart: EasingFunction = (t) => t * t * t * t

// decelerating to zero velocity
export const easeOutQuart: EasingFunction = (t) => 1 - --t * t * t * t

// acceleration until halfway, then deceleration
export const easeInOutQuart: EasingFunction = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t)

// accelerating from zero velocity
export const easeInQuint: EasingFunction = (t) => t * t * t * t * t

// decelerating to zero velocity
export const easeOutQuint: EasingFunction = (t) => 1 + --t * t * t * t * t

// acceleration until halfway, then deceleration
export const easeInOutQuint: EasingFunction = (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t)

type GetEasing = (easing: Easing) => EasingFunction

export const getEasing: GetEasing = (easing) => {
  switch (easing) {
    case Easing.linear:
      return linear

    case Easing.easeInOutQuad:
      return easeInOutQuad

    case Easing.easeOutQuad:
      return easeOutQuad

    case Easing.easeInQuad:
      return easeInQuad

    case Easing.easeInOutCubic:
      return easeInOutCubic

    case Easing.easeOutCubic:
      return easeOutCubic

    case Easing.easeInCubic:
      return easeInCubic

    case Easing.easeInOutQuart:
      return easeInOutQuart

    case Easing.easeOutQuart:
      return easeOutQuart

    case Easing.easeInQuart:
      return easeInQuart

    case Easing.easeInOutQuint:
      return easeInOutQuint

    case Easing.easeOutQuint:
      return easeOutQuint

    case Easing.easeInQuint:
      return easeInQuint

    default:
      return easeInOutQuad
  }
}
