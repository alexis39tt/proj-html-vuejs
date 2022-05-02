<template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script type="text/babel">
import ICountUp from "vue-countup-v2";
export default {
  name: "DemoOne",
  props: {
    stories: Number,
  },
  components: {
    ICountUp,
  },
  data() {
    return {
      delay: 1000,
      endVal: this.stories,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },
    };
  },
  methods: {
    onReady: function (instance) {
      const that = this;
      instance.update(that.endVal);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../mixin";
.iCountUp {
  color: $lightcyan;
  font-family: $merryweather;
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
}
</style>