<template>
  <section>
    <div class="container">
      <div class="text">
        <h2>Popular Online Courses</h2>
        <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp7",
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container{
  border-top: 2px solid $lightgray;
  background-image: url("../../assets/img/page-background-img.png");
  background-repeat: no-repeat;
  background-size: 200%;
  height: 1000px;
  .text{
    text-align: center;
    margin: 200px 270px;
    h2{ 
      font-family: $merryweather;
      font-size: 3rem;
      color: $darkgray;
    }
    p{
      font-family: $roboto;
      font-size: 1.5rem;
      color: $mediumgray;
      line-height: $def-lineheight;
      margin: 20px 0 0;
    }
  }
}
</style>