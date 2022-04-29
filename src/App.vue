<template>
  <div id="app">
    <HeaderSection />
    <ScrollToTop />
    <MainSection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import MainSection from "./components/MainSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    ScrollToTop,
    MainSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@300;400;700&display=swap");
@import "mixin";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 22px;
  scroll-behavior: smooth;
}

ul {
  list-style: none;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: $lightgray;
}

::-webkit-scrollbar-thumb {
  background: $lightcyan;
}

::-webkit-scrollbar-thumb:hover {
  background: $darkcyan;
}

::selection {
  background: $lightcyan;
}
</style>