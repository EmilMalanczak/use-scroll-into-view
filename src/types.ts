export type Alignment = 'start' | 'end' | 'center'

export type Axis = 'x' | 'y'

export type EasingFunction = (t: number) => number

export enum Easing {
  easeInSine,
  easeOutSine,
  easeInOutSine,

  easeInQuad,
  easeOutQuad,
  easeInOutQuad,

  easeInCubic,
  easeOutCubic,
  easeInOutCubic,

  easeInQuart,
  easeOutQuart,
  easeInOutQuart,

  easeInQuint,
  easeOutQuint,
  easeInOutQuint,

  easeInExpo,
  easeOutExpo,
  easeInOutExpo,

  easeInCirc,
  easeOutCirc,
  easeInOutCirc,

  easeInBack,
  easeOutBack,
  easeInOutBack,

  easeInElastic,
  easeOutElastic,
  easeInOutElastic,

  easeInBounce,
  easeOutBounce,
  easeInOutBounce
}
