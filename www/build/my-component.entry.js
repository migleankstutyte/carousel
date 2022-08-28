import { r as registerInstance, h, g as getElement } from './index-bbedb488.js';

const carouselScss = ".container {\n  text-align: center;\n}\nh1 {\n  text-transform: uppercase;\n}\n\n.slides {\n  display: flex;\n  transition: transform 0.5s ease-in-out;\n}\n\n.slides div {\n  display: flex;\n  flex-direction: column;\n}\n\n.slides div img {\n  height: 600px;\n  width: 1000px;\n}\n\n.slider-dots {\n  display: flex;\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active,\n.dot:hover {\n  background-color: #717171;\n}\n\nbutton {\n  position: absolute;\n  z-index: 1;\n  top: calc(50% - 32px);\n  padding: 20px;\n  font-size: 20px;\n  line-height: 20px;\n  opacity: 0.5;\n\n  &:hover {\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    opacity: 0.25;\n  }\n\n  &.btn_next {\n    right: 0;\n  }\n}\n\n.btn_prev {\n  margin-top: 150px;\n\n  &:hover {\n    background-color: black;\n  }\n}\n";

const Carousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.currentSlideNumber = 0;
    this.nextSlide = 1;
    this.slidesCount = 0;
    this.slides = [];
    this.slideWidth = 0;
    this.controls = {
      prev: null,
      next: null,
    };
    this.start = 0;
    this.end = 5;
  }
  componentWillLoad() {
    this.items = [
      {
        id: 1,
        title: "Buildings",
        imgUrl: "https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true",
      },
      {
        id: 2,
        title: "Window",
        imgUrl: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
      },
      {
        id: 3,
        title: "Trees",
        imgUrl: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
      },
      {
        id: 4,
        title: "Spring",
        imgUrl: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg",
      },
      {
        id: 5,
        title: "Sea",
        imgUrl: "https://unsplash.imgix.net/photo-1414073875831-b47709631146?q=75&fm=jpg&s=731b6d5150eea8bafa63ae8194e72ebd",
      },
      {
        id: 6,
        title: "Square",
        imgUrl: "https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg",
      },
      {
        id: 7,
        title: "Alone",
        imgUrl: "https://images.unsplash.com/photo-1504736038806-94bd1115084e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3d045bbf1ecc01c4c9ec011ce5c8977d",
      },
      {
        id: 8,
        title: "Mountains",
        imgUrl: "https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=76d5c793e4f8d02d7a9be27bc71256f7",
      },
      {
        id: 9,
        title: "Winter",
        imgUrl: "https://ununsplash.imgix.net/photo-1417021423914-070979c8eb34?q=75&fm=jpg&s=55746bd56e02a131b1e48c12196ea866",
      },
      {
        id: 10,
        title: "Night",
        imgUrl: "https://ununsplash.imgix.net/reserve/oY3ayprWQlewtG7N4OXl_DSC_5225-2.jpg?q=75&fm=jpg&s=85ab821f3fa535036a68155aab571bad",
      },
    ];
    this.slidesCount = this.items.length;
    this.getCurrentSlides();
    console.log("items", this.items);
    console.log("items length", this.items.length);
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
    else
      this.end = this.items.length - 1;
  }
  componentDidLoad() {
    this.sliderList = this.el.shadowRoot.getElementById("slides");
    this.slideWidth = this.items[0].offsetWidth;
    for (let type in this.controls)
      this.controls[type] = this.el.shadowRoot.querySelector(".btn_" + type);
    this.updateControls();
  }
  componentDidUpdate() {
    this.updateControls();
  }
  slide() {
    console.log("nextSlide before", this.nextSlide);
    let slideTo = this.nextSlide;
    console.log("slideTo", slideTo);
    if (slideTo < 0 || slideTo >= this.slidesCount)
      return;
    this.currentSlideNumber = slideTo;
    this.nextSlide = slideTo + 1;
    console.log("nextSlide after", this.nextSlide);
  }
  updateControls() {
    this.switchControl("prev", this.nextSlide === 1 ? false : true);
    this.switchControl("next", this.currentSlideNumber === this.slidesCount - 1 ? false : true);
  }
  switchControl(type, enabled) {
    if (this.controls[type])
      this.controls[type].disabled = !enabled;
  }
  currentSlide(n) {
    console.log("n", n);
    this.nextSlide = n;
  }
  showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.nextSlide = 1;
    }
    if (n < 1) {
      this.nextSlide = slides.length;
    }
    dots[this.nextSlide - 1].className += " active";
  }
  render() {
    return (h("div", { class: "container" }, h("h1", { tabindex: "1" }, "Do you want to have a trip?"), h("div", { id: "slides", class: "slides" }, this.items.map((slide) => (h("div", null, h("img", { src: slide.imgUrl, id: slide.id, onClick: () => console.log("slide.id", slide.id), key: slide.id, alt: slide.title }), h("span", null, slide.title))))), h("button", { type: "button", class: "btn_prev", onClick: this.slide.bind(this, -1), tabindex: "2" }, "Previous"), h("button", { type: "button", class: "btn_next", onClick: this.slide.bind(this, 1), tabindex: "3" }, "Next"), h("div", null, "Slide ", h("span", { tabindex: "4" }, this.nextSlide), "/", h("span", { tabindex: "5" }, this.slidesCount)), h("div", { class: "slider-dots" }, this.items.map((slide) => (h("span", { class: "dot", onClick: this.currentSlide.bind(this, slide.id) })))), this.nextSlide === this.slidesCount && (h("h1", null, "Have you enjoyed the trip?"))));
  }
  get el() { return getElement(this); }
};
Carousel.style = carouselScss;

export { Carousel as my_component };
