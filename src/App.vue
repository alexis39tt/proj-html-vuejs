<template>
  <div id="app">
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue"
import MainSection from "./components/MainSection.vue"
import FooterSection from "./components/FooterSection.vue"

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    FooterSection
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@300;400;700&display=swap');
@import "mixin";

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 22px;
}

ul{
  list-style: none;
}
</style>