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
    button.classList.add("visible");
  } else {
    navbar.classList.remove("navbar-bg");
    button.classList.remove("visible");
  }
};