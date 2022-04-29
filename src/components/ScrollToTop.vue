<template>
  <div id="scroll-to-top" @click="backtotop()">
    <img src="../assets/svg/top.svg" alt="scroll to top" />
    <p>TOP</p>
  </div>
</template>

<script>
export default {
  name: "ScrollToTop",
  methods: {
      backtotop: function(){
          window.scrollTo(0, 0)
      }
  },
  mounted() {
    let button = document.querySelector("#scroll-to-top");
    window.onscroll = () => {
      if (window.scrollY > 180) {
        button.classList.add("visible");
      } else {
        button.classList.remove("visible");
      }
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../mixin";

#scroll-to-top {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 90px;
  height: 90px;
  background: $lightcyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $white;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: $roboto;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  display: none;
  z-index: 9;
  &:hover {
    color: $black;
    background: $white;
    img {
      filter: invert(0);
    }
  }
  img {
    width: 60px;
    margin: auto;
    filter: invert(1);
    transition: 0.4s;
  }
  p {
    margin: -10px 0 10px;
  }
}
.visible{
    display: block !important;
}
</style>