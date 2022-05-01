<template>
  <main>
    <MainComp1 />
    <MainComp2 />
    <MainComp3 />
  </main>
</template>

<script>
import MainComp1 from "./common/MainComp1.vue";
import MainComp2 from "./common/MainComp2.vue";
import MainComp3 from "./common/MainComp3.vue";

export default {
  name: "MainSection",
  components: {
    MainComp1,
    MainComp2,
    MainComp3
  },
};
</script>

<style lang="scss" scoped>
</style>