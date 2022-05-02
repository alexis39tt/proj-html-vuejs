<template>
  <div class="card">
    <div class="img">
      <img :src="require('../../../assets/img/' + course.img)" alt="" />
    </div>
    <div class="text">
      <div class="title">
        <p>{{ course.title }}</p>
        <span v-if="course.price == 0" class="free">FREE</span>
        <span v-else class="paid">${{ course.price }}</span>
      </div>
      <div class="teacher">
        <p>{{ course.teacher }}</p>
      </div>
      <div class="desc">
        <p>{{ course.desc }}</p>
      </div>
      <div class="icons">
        <div class="users">
          <img src="../../../assets/svg/person.svg" alt="user" />
          <p>{{ course.users }}</p>
        </div>
        <div class="tag">
          <img src="../../../assets/svg/tag.svg" alt="user" />
          <p class="name">{{ course.tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../mixin";
.card {
  width: 550px;
  max-width: 30%;
  border: 1px solid $lightgray;
  cursor: pointer;
  transition: $short-trans;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 3px 10px 0px $lightgray;
  }
  .img {
    img {
      width: 100%;
    }
  }
  .text {
    padding: 30px;
    .title {
      display: flex;
      justify-content: space-between;
      p {
        font-family: $merryweather;
        font-weight: bold;
        color: $darkgray;
      }
      span {
        padding: 5px 20px;
        border-radius: 30px;
        font-size: 0.8rem;
        font-family: $roboto;
        color: $white;
      }
      span.free {
        background: $gold;
      }
      span.paid {
        background: $lightcyan;
      }
    }
    .teacher p {
      font-family: $roboto;
      color: $lightgray;
      margin: 10px 0 30px;
    }
    .desc p {
      font-family: $roboto;
      color: $mediumgray;
    }
  }
  .icons {
    margin-top: 30px;
    display: flex;
    .users,
    .tag {
      display: flex;
      line-height: 1.5rem;
      img {
        height: 70%;
        filter: opacity(0.2);
      }
      p {
          color: $lightgray;
        margin-left: 5px;
        font-family: $roboto;
      }
    }
    .tag {
        img{
            transform: scaleX(-1);
        }
      p {
        font-size: 1.2rem;
        font-weight: bold;
        font-variant: small-caps;
      }
    }
  }
}
</style>