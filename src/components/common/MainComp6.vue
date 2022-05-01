<template>
  <section>
    <div class="container">
      <div class="sections">
        <div
          class="section"
          v-for="(elm, i) in sections"
          :key="'a' + i"
          @click="changesection(i)"
          :class="selected == i ? 'selected' : ''"
        >
          <h3>{{ elm.name }}</h3>
        </div>
      </div>
      <div class="text">
        <h2>{{ sections[selected].title }}</h2>
        <p class="content">{{ sections[selected].content }}</p>
        <p v-for="(elm, i) in sections[selected].checks" :key="'b' + i">
          <span>&#10004;</span>
          {{ elm }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp6",
  data() {
    return {
      selected: 0,
      sections: [
        {
          name: "What We Do",
          title: "Learning Possibilities",
          content:
            "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate.",
          checks: [
            "We enrich lives through learning.",
            "Maximing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
        },
        {
          name: "Degree Programme",
          title: "Degree Programme",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tristique nulla. Pellentesque posuere facilisis sem, ac volutpat lectus placerat et.",
          checks: [
            "Lorem ipsum.",
            "Dolor sit amet.",
            "Lorem ipsum.",
            "Dolor sit amet.",
          ],
        },
        {
          name: "Career Achievements",
          title: "Career Achievements",
          content:
            "Nam non ex a ipsum vulputate mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam posuere ex in faucibus varius.",
          checks: [
            "Lorem ipsum.",
            "Dolor sit amet.",
            "Lorem ipsum.",
            "Dolor sit amet.",
          ],
        },
        {
          name: "Personal Management",
          title: "Personal Management",
          content:
            "Nullam nec luctus ex, eget pulvinar metus. Quisque placerat convallis feugiat. In hac habitasse platea dictumst. Nam porta nisl ut libero varius condimentum.",
          checks: [
            "Lorem ipsum.",
            "Dolor sit amet.",
            "Lorem ipsum.",
            "Dolor sit amet.",
          ],
        },
        {
          name: "Steps To Success",
          title: "Steps To Success",
          content:
            "Nullam ut quam ac ex venenatis bibendum. Suspendisse consectetur ex enim, in dapibus ligula facilisis id. Nullam id nisi felis. Mauris id mauris odio. Integer at sapien massa.",
          checks: [
            "Lorem ipsum.",
            "Dolor sit amet.",
            "Lorem ipsum.",
            "Dolor sit amet.",
          ],
        },
        {
          name: "Knowledge Transfer",
          title: "Knowledge Transfer",
          content:
            "Duis lobortis leo ante, ut vulputate est finibus tincidunt. Suspendisse sit amet pulvinar metus. In non dapibus urna, in euismod risus.",
          checks: [
            "Lorem ipsum.",
            "Dolor sit amet.",
            "Lorem ipsum.",
            "Dolor sit amet.",
          ],
        },
      ],
    };
  },
  methods: {
    changesection: function (i) {
      this.selected = i;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container {
  padding: 150px $def-padding;
  display: flex;
  .sections {
    width: 400px;
    .section {
      border: 2px solid $lightgray;
      border-bottom: none;
      padding: 30px;
      cursor: pointer;
      color: $mediumgray;
      h3 {
        font-family: $merryweather;
      }
    }
    .section:last-of-type {
      border-bottom: 2px solid $lightgray;
    }
    .selected {
      color: $lightcyan;
      border-left: 7px solid $lightcyan;
    }
  }
  .text {
    width: 1300px;
    padding: 0 $def-padding;
    h2 {
      font-family: $merryweather;
      font-size: 3rem;
      color: $darkgray;
    }
    p.content {
      line-height: $def-lineheight;
    }
    p {
      font-family: $roboto;
      font-size: 1.5rem;
      color: $mediumgray;
      line-height: 0.8rem;
      margin: 30px 0 50px;
      span {
        color: $lightcyan;
      }
    }
  }
}
</style>