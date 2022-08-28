import { r as registerInstance, h, g as getElement } from './index-0fe51005.js';

const myCarouselCss = ".container{text-align:center}.container h1{text-transform:uppercase}.container .slides{display:flex;transition:transform 0.5s ease-in-out}.container .slides div{display:flex;flex-direction:column}.container .slides div img{height:600px;width:1000px}.container .slider-dots{display:flex;justify-content:center}.container .slider-dots .dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color 0.6s ease}.container .slider-dots .dot:hover,.container .slider-dots .dot:active{background-color:#717171}.container .button-container{display:flex;justify-content:space-between}.container .button-container .button{background:inherit;border:none;font-size:100px;color:white;position:absolute;top:35%;cursor:pointer;transition:all 0.5s ease-in-out}.container .button-container .button__next{right:30px}.container .button-container .button__prev{left:30px}.container .button-container .button:hover{transform:scale(1.5)}.container .button-container .button[disabled],.container .button-container .button[disabled]:hover{opacity:0.25}";

const MyCarousel = class {
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
      this.controls[type] = this.el.shadowRoot.querySelector(".button__" + type);
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
    return (h("div", { class: "container" }, h("h1", { tabindex: "1" }, "Do you want to have a trip?"), h("div", { id: "slides", class: "slides" }, this.items.map((slide) => (h("div", null, h("img", { src: slide.imgUrl, id: slide.id, onClick: () => console.log("slide.id", slide.id), key: slide.id, alt: slide.title }), h("span", null, slide.title))))), h("div", { class: "button-container" }, h("button", { type: "button", class: "button button__prev", onClick: this.slide.bind(this, -1), tabindex: "2" }, "\u2039"), h("button", { type: "button", class: "button button__next", onClick: this.slide.bind(this, 1), tabindex: "3" }, "\u203A")), h("div", null, "Slide ", h("span", { tabindex: "4" }, this.nextSlide), "/", h("span", { tabindex: "5" }, this.slidesCount)), h("div", { class: "slider-dots" }, this.items.map((slide) => (h("span", { class: "dot", onClick: this.currentSlide.bind(this, slide.id) })))), this.nextSlide === this.slidesCount && (h("h1", null, "Have you enjoyed the trip?"))));
  }
  get el() { return getElement(this); }
};
MyCarousel.style = myCarouselCss;

export { MyCarousel as my_carousel };
