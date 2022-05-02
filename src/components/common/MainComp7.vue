<template>
  <section>
    <div class="container">
      <div class="text">
        <h2>Popular Online Courses</h2>
        <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit</p>
      </div>
      <div class="courses">
        <CourseCard v-for="(elm, i) in courses" :key="i" :course="elm" />
      </div>
    </div>
  </section>
</template>

<script>
import CourseCard from "./subcomponents/CourseCard.vue";
export default {
  name: "MainComp7",
  components: {
    CourseCard
  },
  data(){
    return{
      courses: [
        {
          title: 'Android Developer',
          teacher: 'David Sanders',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.',
          users: 1,
          tag: 'programming',
          price: 0,
          img: 'course-5-f-img.jpg'
        },
        {
          title: 'Web Designing',
          teacher: 'Jennifer Powell',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.',
          users: 1,
          tag: 'programming',
          price: 0,
          img: 'course-6-f-img.jpg'
        },
        {
          title: 'Financial Modeling',
          teacher: 'Edward Bowman',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.',
          users: 1,
          tag: 'business',
          price: 20,
          img: 'course-12-f-img.jpg'
        },
      ]
    }
  }
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
  padding: $def-padding;
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
  .courses{
    display: flex;
    justify-content: space-between;
  }
}
</style>