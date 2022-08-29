import { Component, h, State, Method, Prop } from "@stencil/core";
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
  @Prop() duration: number;
  @State() selected: TSlide = data[0];
  @State() selectedIndex: number = 0;

  @Method()
  selectSlide(i: number) {
    this.selected = data[i];
    this.selectedIndex = i;
  }

  switchSlide(i: number) {
    if (this.selectedIndex >= data.length - 1) {
      this.selected = data[0];
      this.selectedIndex = 0;
    } else {
      this.selected = data[this.selectedIndex + i];
      this.selectedIndex += i;
    }
  }

  componentWillRender() {
    window.setTimeout(() => {
      this.switchSlide(1);
    }, this.duration);
  }

  render() {
    return (
      <div class="container">
        <h1 tabindex="1">Do you want to have a trip?</h1>
        <div id="slides" class="slides">
          <div class="slide">
            <img
              src={this.selected.imgUrl}
              alt={this.selected.title}
              id="slider-img"
            />
            <span id="slider-title">{this.selected.title}</span>
          </div>
        </div>

        <div class="button-container">
          <button
            type="button"
            class="button button__prev"
            onClick={() => this.switchSlide(-1)}
            tabindex="2"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            class="button button__next"
            onClick={() => this.switchSlide(1)}
            tabindex="3"
          >
            &rsaquo;
          </button>
        </div>

        <div>
          Slide <span tabindex="4">{this.selectedIndex + 1}</span>/
          <span tabindex="5">{data.length}</span>
        </div>
        <div class="slider-dots">
          {data.map((_, index) => (
            <span
              class={`dot ${this.selectedIndex === index ? " active" : ""}`}
              onClick={() => this.selectSlide(index)}
            ></span>
          ))}
        </div>
        {this.selectedIndex + 1 === data.length && (
          <h1>Have you enjoyed the trip?</h1>
        )}
      </div>
    );
  }
}
