import { EventEmitter } from "../../stencil-public-runtime";
import { TSlide } from "../my-carousel/my-carousel";
export declare class MyNavigator {
  data: TSlide[];
  selectedIndex: number;
  select: EventEmitter<number>;
  render(): any;
}
