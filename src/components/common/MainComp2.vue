<template>
  <section>
    <div class="courses">
      <div class="course" v-for="(elm, i) in courses" :key="i">
        <img :src="`${publicPath}../../src/assets/img/${elm.icon}`" :alt="elm.name" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp2",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      courses: [
        {
          name: "Languages",
          icon: "h5-custom-icon-1.png",
        },
        {
          name: "Software",
          icon: "h5-custom-icon-2.png",
        },
        {
          name: "Business",
          icon: "h5-custom-icon-3.png",
        },
        {
          name: "Chemistry",
          icon: "h5-custom-icon-4.png",
        },
        {
          name: "Science",
          icon: "h5-custom-icon-5.png",
        },
        {
          name: "DIY&Craft",
          icon: "h5-custom-icon-6.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
</style>