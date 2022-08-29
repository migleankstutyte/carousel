import { r as registerInstance, h, g as getElement } from './index-7c4f288d.js';

const data = [
  {
    title: "Buildings",
    imgUrl: "https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true",
  },
  {
    title: "Window",
    imgUrl: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
  },
  {
    title: "Trees",
    imgUrl: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
  },
  {
    title: "Spring",
    imgUrl: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg",
  },
  {
    title: "Sea",
    imgUrl: "https://unsplash.imgix.net/photo-1414073875831-b47709631146?q=75&fm=jpg&s=731b6d5150eea8bafa63ae8194e72ebd",
  },
  {
    title: "Square",
    imgUrl: "https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg",
  },
  {
    title: "Alone",
    imgUrl: "https://images.unsplash.com/photo-1504736038806-94bd1115084e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3d045bbf1ecc01c4c9ec011ce5c8977d",
  },
  {
    title: "Mountains",
    imgUrl: "https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=76d5c793e4f8d02d7a9be27bc71256f7",
  },
  {
    title: "Winter",
    imgUrl: "https://ununsplash.imgix.net/photo-1417021423914-070979c8eb34?q=75&fm=jpg&s=55746bd56e02a131b1e48c12196ea866",
  },
  {
    title: "Night",
    imgUrl: "https://ununsplash.imgix.net/reserve/oY3ayprWQlewtG7N4OXl_DSC_5225-2.jpg?q=75&fm=jpg&s=85ab821f3fa535036a68155aab571bad",
  },
];

const myCarouselCss = ".container{text-align:center;margin:0 90px}.container h1{text-transform:uppercase}.container .slides{display:flex;transition:transform 0.5s ease-in-out;overflow-x:hidden;width:60%;min-width:700px;margin:auto}.container .slides div{display:flex;flex-direction:column}.container .slides div img{height:600px;width:1000px}.container .button-container{position:absolute;top:40%}.container .button-container .button{background:inherit;border:none;font-size:100px;color:white;cursor:pointer;transition:all 0.5s ease-in-out}.container .button-container .button__next{position:absolute;left:1200px}.container .button-container .button__prev{position:absolute;left:350px}.container .button-container .button:hover{transform:scale(1.5)}.container .button-container .button[disabled],.container .button-container .button[disabled]:hover{opacity:0.25;transform:scale(1);cursor:not-allowed}";

const MyCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.currentSlideNumber = 0;
    this.nextSlide = 1;
    this.controls = {
      prev: null,
      next: null,
    };
    this.currentSlide = (n) => {
      this.nextSlide = n;
      this.showNextSlide(this.nextSlide);
    };
    this.showNextSlide = (id) => {
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
        }
        else if (id === 1) {
          titleContainer.textContent = this.items[0].title;
        }
      }
    };
  }
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
      this.controls[type] = this.el.shadowRoot.querySelector(".button__" + type);
    this.updateControls();
  }
  componentDidUpdate() {
    this.updateControls();
  }
  slide() {
    let slideTo = this.nextSlide;
    if (slideTo < 0 || slideTo >= this.items.length)
      return;
    this.currentSlideNumber = slideTo;
    this.nextSlide = slideTo + 1;
  }
  updateControls() {
    this.switchControl("prev", this.nextSlide === 1 ? false : true);
    this.switchControl("next", this.currentSlideNumber === this.items.length - 1 ? false : true);
  }
  switchControl(type, enabled) {
    if (this.controls[type])
      this.controls[type].disabled = !enabled;
  }
  render() {
    return (h("div", { class: "container" }, h("h1", { tabindex: "1" }, "Do you want to have a trip?"), h("div", { id: "slides", class: "slides" }, this.items.map((slide) => (h("div", { class: "slide" }, h("img", { src: slide.imgUrl, alt: slide.title, id: "slider-img" }), h("span", { id: "slider-title" }, slide.title))))), h("div", { class: "button-container" }, h("button", { type: "button", class: "button button__prev", onClick: this.slide.bind(this, -1), tabindex: "2" }, "\u2039"), h("button", { type: "button", class: "button button__next", onClick: this.slide.bind(this, 1), tabindex: "3" }, "\u203A")), h("div", null, "Slide ", h("span", { tabindex: "4" }, this.nextSlide), "/", h("span", { tabindex: "5" }, this.items.length)), h("div", { class: "slider-dots" }, this.items.map(() => (h("span", { class: "dot", onClick: () => this.currentSlide(this.nextSlide) })))), this.nextSlide === this.items.length && (h("h1", null, "Have you enjoyed the trip?"))));
  }
  get el() { return getElement(this); }
};
MyCarousel.style = myCarouselCss;

export { MyCarousel as my_carousel };
