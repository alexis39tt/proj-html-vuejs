import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let navbar = document.querySelector("#navbar");
let button = document.querySelector("#scroll-to-top");
window.onscroll = () => {
  if (window.scrollY > 180) {
    navbar.classList.add("navbar-bg");
    navbar.style.transform = "translateY(0px)"
    button.classList.add("visible");
  } else {
    navbar.classList.remove("navbar-bg");
    navbar.style.transform = "translateY(30px)"
    button.classList.remove("visible");
  }
};