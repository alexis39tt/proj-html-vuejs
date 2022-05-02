<template>
  <section>
    <div class="container">
      <div class="text">
        <h2>Popular Online Courses</h2>
        <p>
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
          lorem quis bibendum auci elit consequat ipsutis sem nibh id elit
        </p>
      </div>
      <div class="courses">
        <CourseCard
          v-for="(elm, i) in courses"
          :key="'a' + i"
          :course="elm"
          :page="page"
        />
      </div>
      <div class="circles">
        <div
          class="circle selected"
          v-for="(elm, i) in pages"
          :key="'b' + i"
          @click="changecourses(i)"
          :class="elm == page + 1 ? 'selected' : 'unselected'"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import CourseCard from "./subcomponents/CourseCard.vue";
export default {
  name: "MainComp7",
  components: {
    CourseCard,
  },
  data() {
    return {
      page: 0,
      pages: 3,
      courses: [
        {
          title: "Marketing",
          teacher: "Fredrick Smith",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 3,
          tag: "finance",
          price: 30,
          img: "course-5-f-img.jpg",
          page: 0,
        },
        {
          title: "Kotlin for beginners",
          teacher: "Sarah Tudor",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 17,
          tag: "programming",
          price: 400,
          img: "course-6-f-img.jpg",
          page: 0,
        },
        {
          title: "Financial Modeling",
          teacher: "Edward Bowman",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 12,
          tag: "business",
          price: 20,
          img: "course-12-f-img.jpg",
          page: 0,
        },
        {
          title: "Android Developer",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 1,
          tag: "programming",
          price: 0,
          img: "course-1-f-img.jpg",
          page: 1,
        },
        {
          title: "Web Designing",
          teacher: "Jennifer Powell",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 1,
          tag: "programming",
          price: 0,
          img: "course-2-f-img.jpg",
          page: 1,
        },
        {
          title: "Financial Modeling",
          teacher: "Edward Bowman",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 1,
          tag: "business",
          price: 20,
          img: "course-3-f-img.jpg",
          page: 1,
        },
        {
          title: "Photography 101",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 2,
          tag: "programming",
          price: 0,
          img: "course-8-f-img.jpg",
          page: 2,
        },
        {
          title: "Surgery",
          teacher: "Jennifer Powell",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 56,
          tag: "medicine",
          price: 900,
          img: "course-9-f-img.jpg",
          page: 2,
        },
        {
          title: "Home cooking",
          teacher: "Richard Gere",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget elit tincidunt, euismod ligula non, consequat nisl. Nulla sit amet risus sit amet velit fermentum euismod. Integer pretium enim ut rhoncus finibus.",
          users: 187,
          tag: "cooking",
          price: 0,
          img: "course-10-f-img.jpg",
          page: 2,
        },
      ],
    };
  },
  methods: {
    changecourses: function (i) {
      this.page = i;
    },
    carousel: function () {
      setInterval(() => {
        if (this.page + 1 == this.pages) {
          this.page = 0;
        } else {
          this.page++;
        }
      }, 10000);
    },
  },
  mounted() {
    this.carousel();
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container {
  border-top: 2px solid $lightgray;
  background-image: url("../../assets/img/page-background-img.png");
  background-repeat: repeat;
  background-size: 150%;
  background-position: center;
  overflow: hidden;
  padding: $def-padding;
  .text {
    text-align: center;
    margin: 200px 270px;
    h2 {
      font-family: $merryweather;
      font-size: 3rem;
      color: $darkgray;
    }
    p {
      font-family: $roboto;
      font-size: 1.5rem;
      color: $mediumgray;
      line-height: $def-lineheight;
      margin: 20px 0 0;
    }
  }
  .courses {
    display: flex;
    justify-content: space-between;
  }
  .circles {
    display: flex;
    justify-content: center;
    .circle {
      width: 20px;
      height: 20px;
      margin: 50px 10px 100px;
      border-radius: 50%;
      cursor: pointer;
    }
    .selected {
      background: $darkcyan;
    }
    .unselected {
      background: $lightcyan;
      filter: opacity(0.5);
    }
  }
}
</style>