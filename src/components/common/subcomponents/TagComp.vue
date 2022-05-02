<template>
  <div class="course">
    <img :src="require('../../../assets/img/' + tag.icon)" :alt="tag.name" />
    <p>{{ tag.name }}</p>
  </div>
</template>

<script>
export default {
  name: "TagComp",
  props: {
    tag: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../mixin";
.course {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $lightcyantrans;
  border: 1px solid $lightgraytrans;
  padding: 90px 70px;
  cursor: pointer;
  transition: $short-trans;
  &:hover {
    border: 1px solid $lightgray;
    background: $lightcyantranshover;
  }
  img {
    margin-bottom: 10px;
  }
  p {
    font-family: $merryweather;
    font-weight: 600;
    color: $darkgray;
  }
}
</style>