import { r as registerInstance, e as createEvent, h } from './index-b82b36ef.js';

const myNavigatorCss = ".slider-dots{display:flex;justify-content:center}.slider-dots .dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color 0.6s ease}.slider-dots .dot:hover,.slider-dots .dot.active{background-color:#717171}";

const MyNavigator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.select = createEvent(this, "select", 7);
  }
  render() {
    return (h("div", { class: "slider-dots" }, this.data.map((_, index) => (h("span", { class: `dot ${this.selectedIndex === index ? " active" : ""}`, onClick: () => this.select.emit(index), tabindex: "8", role: "button", "aria-pressed": this.selectedIndex === index })))));
  }
};
MyNavigator.style = myNavigatorCss;

export { MyNavigator as my_navigator };
