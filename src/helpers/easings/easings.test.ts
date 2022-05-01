import { getEasing } from './easings'

import { Easing } from '../../types'

describe('easings', () => {
  it('returns proper easing function by easing type', () => {
    const easing = getEasing(Easing.linear)

    const stagePoint = easing(0.5)

    expect(stagePoint).toBe(0.5)
  })
})
