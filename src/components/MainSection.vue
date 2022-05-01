<template>
  <main>
    <MainComp1 />
    <MainComp2 />
  </main>
</template>

<script>
import MainComp1 from "./common/MainComp1.vue";
import MainComp2 from "./common/MainComp2.vue";

export default {
  name: "MainSection",
  components: {
    MainComp1,
    MainComp2
  },
};
</script>

<style lang="scss" scoped>
</style>