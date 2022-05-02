<template>
  <section>
    <div class="container">
      <div class="img">
        <img src="../../assets/img/h5-img-2.jpg" alt="globe" />
      </div>
      <div class="text">
        <h2>Empowering Children to Reach Their Potential.</h2>
        <p class="desc">
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
          lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed
          odio sit amet nibh vulputate.
        </p>
        <div class="stats">
          <div class="stories">
            <StoriesComp :stories="stories" />
            <p>User Stories</p>
          </div>
          <div class="events">
            <EventsComp :events="events" />
            <p>Events</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StoriesComp from "./subcomponents/StoriesComp.vue";
import EventsComp from "./subcomponents/EventsComp.vue";
export default {
  name: "MainComp4",
  components: {
    StoriesComp,
    EventsComp
  },
  data() {
    return {
      stories: 168,
      events: 347,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container {
  margin-top: 100px;
  padding: $def-padding;
  display: flex;
  .img {
    padding-right: $def-padding;
  }
  .text {
    padding-right: 190px;
    h2 {
      font-family: $merryweather;
      font-size: 3rem;
      color: $darkgray;
    }
    p.desc {
      font-family: $roboto;
      font-size: 1.5rem;
      color: $mediumgray;
      line-height: $def-lineheight;
      margin: 30px 0;
    }
  }
  .stats {
    display: flex;
    .stories,
    .events {
      width: 50%;
      h2,
      p {
        color: $lightcyan;
        font-family: $merryweather;
        font-weight: bold;
        margin: 10px 0;
      }
    }
  }
}
</style>