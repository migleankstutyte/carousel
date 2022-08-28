import { Component, h, Element, State } from "@stencil/core";

@Component({
  tag: "my-carousel",
  styleUrl: "my-carousel.scss",
  shadow: true,
})
export class MyCarousel {
  @Element() el: HTMLElement;
  @State() currentSlideNumber: number = 0;
  @State() nextSlide: number = 1;
  private slidesCount: number = 0;
  private slides = [];
  private controls: object = {
    prev: null,
    next: null,
  };
  private start: number = 0;
  private end: number = 5;
  private items: any;

  componentWillLoad() {
    this.items = [
      {
        id: 1,
        title: "Buildings",
        imgUrl:
          "https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true",
      },
      {
        id: 2,
        title: "Window",
        imgUrl:
          "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
      },
      {
        id: 3,
        title: "Trees",
        imgUrl:
          "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
      },
      {
        id: 4,
        title: "Spring",
        imgUrl:
          "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg",
      },
      {
        id: 5,
        title: "Sea",
        imgUrl:
          "https://unsplash.imgix.net/photo-1414073875831-b47709631146?q=75&fm=jpg&s=731b6d5150eea8bafa63ae8194e72ebd",
      },
      {
        id: 6,
        title: "Square",
        imgUrl:
          "https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg",
      },
      {
        id: 7,
        title: "Alone",
        imgUrl:
          "https://images.unsplash.com/photo-1504736038806-94bd1115084e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3d045bbf1ecc01c4c9ec011ce5c8977d",
      },
      {
        id: 8,
        title: "Mountains",
        imgUrl:
          "https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=76d5c793e4f8d02d7a9be27bc71256f7",
      },
      {
        id: 9,
        title: "Winter",

        imgUrl:
          "https://ununsplash.imgix.net/photo-1417021423914-070979c8eb34?q=75&fm=jpg&s=55746bd56e02a131b1e48c12196ea866",
      },
      {
        id: 10,
        title: "Night",
        imgUrl:
          "https://ununsplash.imgix.net/reserve/oY3ayprWQlewtG7N4OXl_DSC_5225-2.jpg?q=75&fm=jpg&s=85ab821f3fa535036a68155aab571bad",
      },
    ];

    this.slidesCount = this.items.length;
    this.getCurrentSlides();
  }

  componentWillRender() {
    window.setTimeout(() => {
      this.slide();
      this.showNextSlide(this.nextSlide);
    }, 3000);
  }

  getCurrentSlides() {
    if (this.start == this.items.length) {
      this.start = 0;
      this.end = 5;
    }
    this.slides = [];
    for (var i = this.start; i <= this.end; i++) {
      this.slides.push(this.items[i]);
      this.slides = [...this.slides, this.items[i]];
    }

    this.start = this.end + 1;
    if (this.start + this.end < this.items.length)
      this.end = this.start + this.end;
    else this.end = this.items.length - 1;
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
    if (slideTo < 0 || slideTo >= this.slidesCount) return;
    this.currentSlideNumber = slideTo;
    this.nextSlide = slideTo + 1;
  }

  updateControls() {
    this.switchControl("prev", this.nextSlide === 1 ? false : true);
    this.switchControl(
      "next",
      this.currentSlideNumber === this.slidesCount - 1 ? false : true
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
      let image = el.firstChild;
      let title = el.textContent;

      let titleContainer = this.el.shadowRoot.getElementById("slider-title");
      let imageContainer = this.el.shadowRoot.getElementById("slider-img");
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
            <div class="slide" key={slide.id} id={slide.id}>
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
          <span tabindex="5">{this.slidesCount}</span>
        </div>

        <div class="slider-dots">
          {this.items.map((slide) => (
            <span
              class="dot"
              onClick={this.currentSlide.bind(this, slide.id)}
            ></span>
          ))}
        </div>
        {this.nextSlide === this.slidesCount && (
          <h1>Have you enjoyed the trip?</h1>
        )}
      </div>
    );
  }
}
