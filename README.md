# use-scroll-into-view

> Better scrollIntoView functionality for React

<!-- [![NPM](https://img.shields.io/npm/v/use-scroll-into-view.svg)](https://www.npmjs.com/package/use-scroll-into-view)  -->

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-scroll-into-view
```

## Usage

`use-scroll-into-view` handles scroll behavior for any scrollable element. Basic usage works the same way as `element.scrollIntoView()`.
Hook adjusts scrolling animation with respect to the `reduced-motion` user preference.

## API

Hook is configured with settings object:

- `onScrollFinish` – function that will be called after scroll animation
- `easing` – custom math EasingFunction function
- `duration` - duration of scroll animation in milliseconds
- `axis` - axis of scroll
- `cancelable` - indicator if animation may be interrupted by user scrolling
- `offset` - additional distance between nearest edge and element
- `isList` - indicator that prevents content jumping in scrolling lists with multiple targets eg. Select, Carousel

Hook returns an object with:

- `scrollIntoView` – function that starts scroll animation
- `cancel` – function that stops scroll animation
- `targetRef` - ref of target HTML node
- `scrollableRef` - ref of scrollable parent HTML element, if not used document element will be used

Returned `scrollIntoView` function accepts single optional argument `alignment` - optional target element alignment relatively to parent based on current axis.

```tsx
scrollIntoView({ alignment: 'center' })
```

## Easing

You can choose easing behavior by selecting value from `Easing` enum exported together with hook.

If you are not satisfied with that the hook accept custom `easing` math function to control the flow of animation.
It takes `t` argument which is a number between `0` and `1`.

Default EasingFunction is `easeInOutQuad` - more info [here](https://easings.net/#easeInOutQuad).
You can find other popular examples on [easings.net](https://easings.net/)

```tsx
useScrollIntoView({
  target: someDomElement,
  easing: (t) => (t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2) // easeInOutQuint
})
```

## Definition

```tsx
function useScrollIntoView<
  Target extends HTMLElement,
  Parent extends HTMLElement | null = null
>({
  onScrollFinish?: () => void;
  duration?: number;
  axis?: 'x' | 'y';
  easing?: (t: number) => number | Easing;
  offset?: number;
  cancelable?: boolean;
  isList?: boolean;
}): {
  targetRef: MutableRefObject<Target>;
  scrollableRef: MutableRefObject<Parent>;
  scrollIntoView: ({
    alignment?: 'start' | 'end' | 'center';
  }) => void;
  cancel: () => void;
};
```

## License

MIT © [EmilMalanczak](https://github.com/EmilMalanczak)

---

### This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook)
