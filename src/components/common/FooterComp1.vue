<template>
  <section>
    <div class="container">
      <div class="text">
        <div class="col">
          <img src="../../assets/img/footer-logo-1.png" alt="logo" />
          <p class="slogan">{{ slogan }}</p>
          <div class="icon">
            <img src="../../assets/svg/phone.svg" alt="phone" />
            <p>{{ phone }}</p>
          </div>
          <div class="icon">
            <img src="../../assets/svg/clock.svg" alt="clock" />
            <p>{{ call_hours }}</p>
          </div>
        </div>
        <div class="col">
          <h3>Popular Courses</h3>
          <div class="course" v-for="(elm, i) in courses" :key="i">
            <h4>{{ elm.name }}</h4>
            <p>{{ elm.teacher }}</p>
          </div>
        </div>
        <div class="col">
          <h3>Support</h3>
          <ul class="links">
            <a v-for="(elm, i) in links" :key="i" :href="elm.link">
              <li>{{ elm.name }}</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="img">
        <div class="col">
          <h3>Flexible Learning</h3>
          <img src="../../assets/img/footer-img-1.png" alt="world" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComp1",
  data() {
    return {
      slogan:
        "Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home",
      phone: "1-677-124-44227",
      call_hours: "Mon - Sat 8.00 - 18.00",
      courses: [
        {
          name: "Business English",
          teacher: "Preston Marshall",
        },
        {
          name: "Social computing",
          teacher: "David Sanders",
        },
        {
          name: "Learn Spanish",
          teacher: "Jennie King",
        },
      ],
      links: [
        {
          name: "User dashboard",
          link: "/dashboard",
        },
        {
          name: "Contact Us",
          link: "/contacts",
        },
        {
          name: "FAQ",
          link: "/faq",
        },
        {
          name: "Course offer",
          link: "/offers",
        },
        {
          name: "Events",
          link: "/events",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container {
  padding: 150px $def-padding 100px;
  display: flex;
  .text {
    width: 75%;
    display: flex;
    .col {
      width: 33%;
      img {
        height: 50px;
        margin-bottom: 42px;
      }
    }
  }
  .col {
    padding-right: 20px;
    h3 {
      font-family: $merryweather;
      font-size: 1.8rem;
      color: $white;
      margin-bottom: 50px;
    }
    h4 {
      font-size: 1.2rem;
      font-family: $merryweather;
      color: $lightgray;
    }
    p {
      font-family: $roboto;
      color: $footergray-text;
      line-height: $def-lineheight - 0.5rem;
    }
    .slogan {
      margin-bottom: 50px;
    }
    .icon {
      display: flex;
      img {
        height: 1.65rem;
        margin-right: 10px;
        filter: invert(0.5);
      }
    }
    .course {
      margin-bottom: 30px;
    }
    .links {
      a {
        text-decoration: none;
        li {
          font-family: $roboto;
          color: $footergray-text;
          margin-bottom: 20px;
          &:hover {
            color: $lightcyan;
          }
        }
      }
    }
  }
}
</style>