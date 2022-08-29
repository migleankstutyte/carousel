export interface TSlide {
  title: string;
  imgUrl: string;
  selected?: boolean;
}
export declare class MyCarousel {
  selected: TSlide;
  selectedIndex: number;
  selectSlide(i: number): void;
  switchSlide(i: number): void;
  componentWillRender(): void;
  render(): any;
}
