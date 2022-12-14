import { r as registerInstance, h } from './index-b82b36ef.js';

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

const myCarouselCss = ".container{display:flex;flex-direction:column;align-items:center}.container h1{text-transform:uppercase}.container .slide{display:flex;flex-direction:column;align-items:center}.container .slide img{height:600px;width:1000px;margin-bottom:20px}.container .slide span{font-size:20px;letter-spacing:2px}.container .slide-count{position:relative;bottom:75px;left:460px;color:white;font-size:20px}.container .button-container{position:absolute;top:35%}.container .button-container .button{background:inherit;border:none;font-size:100px;color:white;cursor:pointer;transition:all 0.5s ease-in-out}.container .button-container .button__next,.container .button-container .button__prev{position:relative}.container .button-container .button__next{left:400px}.container .button-container .button__prev{right:400px}.container .button-container .button:hover{transform:scale(1.5)}";

const MyCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = data[0];
    this.selectedIndex = 0;
  }
  handleSelectSlide(event) {
    this.selectSlide(event.detail);
  }
  selectSlide(i) {
    this.selected = data[i];
    this.selectedIndex = i;
  }
  switchSlide(i) {
    if (this.selectedIndex >= data.length - 1) {
      this.selected = data[0];
      this.selectedIndex = 0;
    }
    else {
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
    return (h("div", { class: "container" }, h("h1", { tabindex: "1" }, "Do you want to have a trip?"), h("div", { class: "slide" }, h("img", { src: this.selected.imgUrl, alt: this.selected.title, tabindex: "4" }), h("span", { tabindex: "7" }, this.selected.title)), h("div", { class: "slide-count" }, h("span", { tabindex: "5" }, this.selectedIndex + 1), "/", h("span", { tabindex: "6" }, data.length)), h("div", { class: "button-container" }, h("button", { type: "button", class: "button button__prev", onClick: () => this.switchSlide(-1), tabindex: "2" }, "\u2039"), h("button", { type: "button", class: "button button__next", onClick: () => this.switchSlide(1), tabindex: "3" }, "\u203A")), h("my-navigator", { data: data, selectedIndex: this.selectedIndex }), this.selectedIndex + 1 === data.length && h("h1", null, "Have you enjoyed?")));
  }
};
MyCarousel.style = myCarouselCss;

export { MyCarousel as my_carousel };
