/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { TSlide } from "./components/my-carousel/my-carousel";
export namespace Components {
    interface MyCarousel {
        "duration": number;
        "selectSlide": (i: number) => Promise<void>;
    }
    interface MyNavigator {
        "data": TSlide[];
        "selectedIndex": number;
    }
}
export interface MyNavigatorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyNavigatorElement;
}
declare global {
    interface HTMLMyCarouselElement extends Components.MyCarousel, HTMLStencilElement {
    }
    var HTMLMyCarouselElement: {
        prototype: HTMLMyCarouselElement;
        new (): HTMLMyCarouselElement;
    };
    interface HTMLMyNavigatorElement extends Components.MyNavigator, HTMLStencilElement {
    }
    var HTMLMyNavigatorElement: {
        prototype: HTMLMyNavigatorElement;
        new (): HTMLMyNavigatorElement;
    };
    interface HTMLElementTagNameMap {
        "my-carousel": HTMLMyCarouselElement;
        "my-navigator": HTMLMyNavigatorElement;
    }
}
declare namespace LocalJSX {
    interface MyCarousel {
        "duration"?: number;
    }
    interface MyNavigator {
        "data"?: TSlide[];
        "onSelect"?: (event: MyNavigatorCustomEvent<number>) => void;
        "selectedIndex"?: number;
    }
    interface IntrinsicElements {
        "my-carousel": MyCarousel;
        "my-navigator": MyNavigator;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-carousel": LocalJSX.MyCarousel & JSXBase.HTMLAttributes<HTMLMyCarouselElement>;
            "my-navigator": LocalJSX.MyNavigator & JSXBase.HTMLAttributes<HTMLMyNavigatorElement>;
        }
    }
}
