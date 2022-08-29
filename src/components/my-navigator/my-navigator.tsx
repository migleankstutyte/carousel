import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { TSlide } from "../my-carousel/my-carousel";

@Component({
  tag: "my-navigator",
  styleUrl: "my-navigator.scss",
  shadow: true,
})
export class MyNavigator {
  @Prop() data: TSlide[];
  @Prop() selectedIndex: number;
  @Event() select: EventEmitter<number>;

  render() {
    return (
      <div class="slider-dots">
        {this.data.map((_, index) => (
          <span
            class={`dot ${this.selectedIndex === index ? " active" : ""}`}
            onClick={() => this.select.emit(index)}
            tabindex="8"
            role="button"
            aria-pressed={this.selectedIndex === index}
          ></span>
        ))}
      </div>
    );
  }
}
