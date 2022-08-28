export declare class MyCarousel {
  first: string;
  middle: string;
  last: string;
  el: HTMLElement;
  currentSlideNumber: number;
  nextSlide: number;
  private slidesCount;
  private slides;
  private sliderList;
  private slideWidth;
  private controls;
  private start;
  private end;
  private items;
  componentWillLoad(): void;
  getCurrentSlides(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  slide(): void;
  updateControls(): void;
  switchControl(type: string, enabled: boolean): void;
  currentSlide(n: any): void;
  showSlides(n: any): void;
  render(): any;
}
