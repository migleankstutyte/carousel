export interface TSlide {
  title: string;
  imgUrl: string;
  selected?: boolean;
}
export declare class MyCarousel {
  duration: number;
  selected: TSlide;
  selectedIndex: number;
  handleSelectSlide(event: any): void;
  selectSlide(i: number): void;
  switchSlide(i: number): void;
  componentWillRender(): void;
  render(): any;
}
