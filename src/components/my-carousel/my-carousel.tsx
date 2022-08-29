import { Component, h, State, Method, Prop, Listen } from "@stencil/core";
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

  @Listen("select")
  handleSelectSlide(event) {
    this.selectSlide(event.detail);
  }

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
        <div class="slide">
          <img
            src={this.selected.imgUrl}
            alt={this.selected.title}
            tabindex="4"
          />
          <span tabindex="7">{this.selected.title}</span>
        </div>
        <div class="slide-count">
          <span tabindex="5">{this.selectedIndex + 1}</span>/
          <span tabindex="6">{data.length}</span>
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
        <my-navigator
          data={data}
          selectedIndex={this.selectedIndex}
        ></my-navigator>
        {this.selectedIndex + 1 === data.length && <h1>Have you enjoyed?</h1>}
      </div>
    );
  }
}
