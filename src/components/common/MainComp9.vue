<template>
  <section>
    <div class="container">
      <div class="images">
        <div v-for="(elm, i) in images" :key="i">
          <img
            @mouseover="hover(i)"
            @mouseout="unhover()"
            :src="
              imghover == i
                ? require(`../../assets/img/${elm.hover}`)
                : require(`../../assets/img/${elm.img}`)
            "
            :alt="elm.name"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp9",
  data() {
    return {
      imghover: null,
      images: [
        {
          name: "iAcademy",
          img: "h5-client-5.png",
          hover: "h5-client-5-h.png",
        },
        {
          name: "Study Central",
          img: "h5-client-1.png",
          hover: "h5-client-1-h.png",
        },
        {
          name: "Educator",
          img: "h5-client-2.png",
          hover: "h5-client-2-h.png",
        },
        {
          name: "Study Central",
          img: "h5-client-1.png",
          hover: "h5-client-1-h.png",
        },
      ],
    };
  },
  methods: {
    hover: function (i) {
      this.imghover = i;
    },
    unhover: function () {
      this.imghover = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.images {
  display: flex;
  justify-content: space-between;
  padding: 100px $def-padding;
  div {
    width: 20%;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>