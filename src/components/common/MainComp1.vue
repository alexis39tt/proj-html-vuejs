<template>
  <section>
    <div class="hero">
      <img
        src="../../assets/img/h5-slide-1-background.jpg"
        alt="hero"
        v-show="count == 0"
      />
      <img
        src="../../assets/img/h5-slide-2-background.jpg"
        alt="hero"
        v-show="count == 1"
      />
      <img
        src="../../assets/img/h5-slide-3-background.jpg"
        alt="hero"
        v-show="count == 2"
      />
      <div class="text">
        <h1>Contemporary Ideas</h1>
        <p>
          Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin,
          lorem quis bibendum auci elit consequat ipsutis sem nibh id elited
          odio sit amet nibcursus a sit amet mauris.
        </p>
        <button class="cyan-btn">register now</button>
      </div>
      <div class="img-selectors">
        <div
          class="circle"
          v-for="(elm, i) in bg_images"
          :key="i"
          @click="changeslide(i)"
          :class="i == count ? 'selected' : 'unselected'"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp1",
  data() {
    return {
      count: 0,
      bg_images: ["reunion", "girl", "working"],
    };
  },
  methods: {
    changeslide: function (i) {
      this.count = i;
    },
    carousel: function () {
      setInterval(() => {
        if (this.count + 1 == this.bg_images.length) {
          this.count = 0;
        } else {
          this.count++;
        }
      }, 5000);
    },
  },
  mounted() {
    this.carousel();
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";

.hero {
  position: relative;
  overflow: hidden;
  img {
    margin-left: -400px;
    width: 140%;
  }
  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;
    text-align: center;
    position: absolute;
    top: 0;
    h1 {
      font-size: 5rem;
      font-family: $merryweather;
    }
    p {
      font-size: 1.5rem;
      font-family: $roboto;
      margin: 50px 180px 70px;
      line-height: 2.5rem;
    }
  }
  .img-selectors {
    display: flex;
    justify-content: center;
    margin-top: -35px;
    transform: translateY(-20px);
    .circle {
      width: 25px;
      height: 25px;
      margin: 0 10px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 2;
    }
    .unselected{
        background-color: $lightgraytrans;
    }
    .selected {
      border: 2px solid $white;
      box-shadow: inset 0 0px 0px 6px #999999, inset 0 0 10px 10px white;
    }
  }
}
</style>