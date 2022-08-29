export interface TSlide {
  title: string;
  imgUrl: string;
  selected?: boolean;
}
export declare class MyCarousel {
  el: HTMLElement;
  currentSlideNumber: number;
  nextSlide: number;
  private controls;
  private items;
  componentWillLoad(): void;
  componentWillRender(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  slide(): void;
  updateControls(): void;
  switchControl(type: string, enabled: boolean): void;
  currentSlide: (n: any) => void;
  showNextSlide: (id: any) => void;
  render(): any;
}
