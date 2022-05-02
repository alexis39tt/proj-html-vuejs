<template>
  <section>
    <div class="container">
      <hr />
      <div class="text">
        <div>
          <p>Copyrights {{ year }} &copy;Mikado Themes</p>
        </div>
        <div class="right">
          <p>CALL {{ phone }}</p>
          <p>FOLLOW US</p>
          <div>
            <a v-for="(elm, i) in socials" :key="i" :href="elm.link">
              <img
                :src="require('../../assets/svg/' + elm.img)"
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComp2",
  data() {
    return {
      year: new Date().getFullYear(),
      phone: "+44 300 303 0266",
      socials: [
        {
          name: "Twitter",
          img: "social-twitter.svg",
          link: "/twitter",
        },
        {
          name: "Instagram",
          img: "social-instagram.svg",
          link: "/instagram",
        },
        {
          name: "Facebook",
          img: "social-facebook.svg",
          link: "/facebook",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container {
  padding: 0 $def-padding 50px;
  hr {
    border: 1px solid $darkgray;
    width: 100%;
  }
  .text {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    font-family: $roboto;
    color: $footergray-text;
    font-size: 0.8rem;
    .right {
      display: flex;
      p {
        margin: 0 15px;
      }
      img {
        height: 20px;
        margin-left: 30px;
        filter: invert(0.5) opacity(0.9);
        cursor: pointer;
      }
    }
  }
}
</style>