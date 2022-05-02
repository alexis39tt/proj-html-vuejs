<template>
  <section>
    <div class="container">
      <div class="courses">
        <TagComp v-for="(elm, i) in courses" :key="i" :tag="elm" />
      </div>
    </div>
  </section>
</template>

<script>
import TagComp from "./subcomponents/TagComp.vue";
export default {
  name: "MainComp2",
  components: {
    TagComp,
  },
  data() {
    return {
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
.courses {
  display: flex;
  justify-content: space-between;
  padding: 100px $def-padding;
}
</style>