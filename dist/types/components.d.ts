/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyCarousel {
        "duration": number;
        "selectSlide": (i: number) => Promise<void>;
    }
}
declare global {
    interface HTMLMyCarouselElement extends Components.MyCarousel, HTMLStencilElement {
    }
    var HTMLMyCarouselElement: {
        prototype: HTMLMyCarouselElement;
        new (): HTMLMyCarouselElement;
    };
    interface HTMLElementTagNameMap {
        "my-carousel": HTMLMyCarouselElement;
    }
}
declare namespace LocalJSX {
    interface MyCarousel {
        "duration"?: number;
    }
    interface IntrinsicElements {
        "my-carousel": MyCarousel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-carousel": LocalJSX.MyCarousel & JSXBase.HTMLAttributes<HTMLMyCarouselElement>;
        }
    }
}
