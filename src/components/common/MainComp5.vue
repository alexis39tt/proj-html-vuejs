<template>
  <section>
    <div class="container">
      <div
        v-for="(elm, i) in testimonials"
        :key="'a' + i"
        class="testimonial"
        v-show="count == i"
      >
        <img :src="require('../../assets/img/' + elm.img)" :alt="elm.name" />
        <p class="content">"{{ elm.content }}"</p>
        <p class="name">{{ elm.name }}</p>
        <p class="profession">{{ elm.profession }}</p>
      </div>
      <div class="circles">
        <div
          v-for="(elm, i) in testimonials"
          :key="'b' + i"
          class="circle"
          @click="changestestimonial(i)"
          :class="i == count ? 'selected' : 'unselected'"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp5",
  data() {
    return {
      count: 2,
      testimonials: [
        {
          name: "Sarah Smith",
          profession: "customer",
          img: "testimonials-standard-1.png",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum vel dolor sed dapibus. Aenean eros arcu, euismod eget ligula sit amet, ultricies mollis lorem. Maecenas imperdiet lectus quis interdum cursus.",
        },
        {
          name: "Joan Collins",
          profession: "student",
          img: "testimonials-standard-2.png",
          content:
            "Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus",
        },
        {
          name: "Fredrick Smith",
          profession: "teacher",
          img: "testimonials-standard-3.png",
          content:
            "Duis blandit nunc nec dapibus rhoncus. Nulla facilisi. Praesent id viverra metus. Mauris vehicula dapibus hendrerit. Morbi hendrerit felis eget ullamcorper pellentesque. Duis hendrerit orci id suscipit efficitur. Sed consectetur rhoncus viverra.",
        },
      ],
    };
  },
  methods: {
    changestestimonial: function (i) {
      this.count = i;
    },
    carousel: function () {
      setInterval(() => {
        if (this.count + 1 == this.testimonials.length) {
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
.container {
  background-image: url("../../assets/img/h5-parallax-img-1.png");
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: center;
  padding: 200px $def-padding;
  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      width: 105px;
    }
    p.content {
      margin: 30px 26%;
      font-family: $roboto;
      line-height: $def-lineheight - 0.5rem;
      color: $white;
    }
    p.name {
      margin: 0 26%;
      font-family: $merryweather;
      font-weight: bold;
      color: $white;
    }
    p.profession {
      margin: 10px 26% 50px;
      font-family: $roboto;
      font-weight: bold;
      font-variant: small-caps;
      color: $white;
    }
  }
  .circles {
    display: flex;
    justify-content: center;
    .circle {
      width: 20px;
      height: 20px;
      margin: 0 10px;
      border-radius: 50%;
      cursor: pointer;
    }
    .selected {
      background: $white;
    }
    .unselected {
      background: #D6F2FF;
    }
  }
}
</style>