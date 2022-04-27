import type { Easing } from '../types'

export const easeInOutQuad: Easing = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
