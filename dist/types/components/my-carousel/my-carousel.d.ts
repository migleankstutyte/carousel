export declare class MyCarousel {
  el: HTMLElement;
  currentSlideNumber: number;
  nextSlide: number;
  private slidesCount;
  private slides;
  private controls;
  private start;
  private end;
  private items;
  componentWillLoad(): void;
  componentWillRender(): void;
  getCurrentSlides(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  slide(): void;
  updateControls(): void;
  switchControl(type: string, enabled: boolean): void;
  currentSlide: (n: any) => void;
  showNextSlide: (id: any) => void;
  render(): any;
}
