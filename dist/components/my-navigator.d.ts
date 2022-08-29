import type { Components, JSX } from "../types/components";

interface MyNavigator extends Components.MyNavigator, HTMLElement {}
export const MyNavigator: {
  prototype: MyNavigator;
  new (): MyNavigator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
