<template>
  <section>
    <div class="courses">
      <div class="course" v-for="(elm, i) in courses" :key="i">
        <img :src="require('../../assets/img/' + elm.icon)" :alt="elm.name" />
        <p>{{ elm.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp2",
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
.courses{
  display: flex;
  justify-content: space-between;
  padding: 100px $def-padding;
  .course{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: $lightcyantrans;
    border: 1px solid $lightgraytrans;
    padding: 90px 70px;
    cursor: pointer;
    transition: $short-trans;
    &:hover{
      border: 1px solid $lightgray;
      background: $lightcyantranshover;
    }
    img{
      margin-bottom: 10px;
    }
    p{
      font-family: $merryweather;
      font-weight: 600;
    }
  }
}
</style>