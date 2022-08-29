import { Component, h, Element, State } from "@stencil/core";
import data from "./data";

export interface TSlide {
  title: string;
  imgUrl: string;
  selected?: boolean;
}
@Component({
  tag: "my-carousel",
  styleUrl: "my-carousel.scss",
  shadow: true,
})
export class MyCarousel {
  @Element() el: HTMLElement;
  @State() currentSlideNumber: number = 0;
  @State() nextSlide: number = 1;

  private controls: object = {
    prev: null,
    next: null,
  };
  private items: TSlide[];

  componentWillLoad() {
    this.items = data;
  }

  componentWillRender() {
    window.setTimeout(() => {
      this.slide();
      this.showNextSlide(this.nextSlide);
    }, 3000);
  }

  componentDidLoad() {
    for (let type in this.controls)
      this.controls[type] = this.el.shadowRoot.querySelector(
        ".button__" + type
      );
    this.updateControls();
  }

  componentDidUpdate() {
    this.updateControls();
  }

  slide() {
    let slideTo = this.nextSlide;
    if (slideTo < 0 || slideTo >= this.items.length) return;
    this.currentSlideNumber = slideTo;
    this.nextSlide = slideTo + 1;
  }

  updateControls() {
    this.switchControl("prev", this.nextSlide === 1 ? false : true);
    this.switchControl(
      "next",
      this.currentSlideNumber === this.items.length - 1 ? false : true
    );
  }

  switchControl(type: string, enabled: boolean) {
    if (this.controls[type]) this.controls[type].disabled = !enabled;
  }

  currentSlide = (n) => {
    this.nextSlide = n;
    this.showNextSlide(this.nextSlide);
  };

  showNextSlide = (id) => {
    let i;
    let slides = this.el.shadowRoot.getElementById("slides");
    const childNodes = Array.from(slides.childNodes);

    for (i = 0; i < childNodes.length; i++) {
      let el = childNodes[i];
      let title = el.textContent;

      let titleContainer = this.el.shadowRoot.getElementById("slider-title");
      let mainSlide = this.el.shadowRoot.querySelector(".slide");

      if (i === id - 1) {
        childNodes[i].replaceWith(mainSlide, el);
        titleContainer.textContent = title;
      } else if (id === 1) {
        titleContainer.textContent = this.items[0].title;
      }
    }
  };

  render() {
    return (
      <div class="container">
        <h1 tabindex="1">Do you want to have a trip?</h1>
        <div id="slides" class="slides">
          {this.items.map((slide) => (
            <div class="slide">
              <img src={slide.imgUrl} alt={slide.title} id="slider-img" />
              <span id="slider-title">{slide.title}</span>
            </div>
          ))}
        </div>
        <div class="button-container">
          <button
            type="button"
            class="button button__prev"
            onClick={this.slide.bind(this, -1)}
            tabindex="2"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            class="button button__next"
            onClick={this.slide.bind(this, 1)}
            tabindex="3"
          >
            &rsaquo;
          </button>
        </div>
        <div>
          Slide <span tabindex="4">{this.nextSlide}</span>/
          <span tabindex="5">{this.items.length}</span>
        </div>

        <div class="slider-dots">
          {this.items.map(() => (
            <span
              class="dot"
              onClick={() => this.currentSlide(this.nextSlide)}
            ></span>
          ))}
        </div>
        {this.nextSlide === this.items.length && (
          <h1>Have you enjoyed the trip?</h1>
        )}
      </div>
    );
  }
}
