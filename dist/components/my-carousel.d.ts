import type { Components, JSX } from "../types/components";

interface MyCarousel extends Components.MyCarousel, HTMLElement {}
export const MyCarousel: {
  prototype: MyCarousel;
  new (): MyCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
