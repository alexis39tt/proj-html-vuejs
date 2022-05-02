<template>
  <footer>
    <FooterComp1 />
    <FooterComp2 />
  </footer>
</template>

<script>
import FooterComp1 from "./common/FooterComp1";
import FooterComp2 from "./common/FooterComp2";
export default {
  name: "FooterSection",
  components: {
    FooterComp1,
    FooterComp2,
  },
};
</script>

<style lang="scss" scoped>
@import "../mixin";
footer {
  background: $footergray-bg;
}
</style>