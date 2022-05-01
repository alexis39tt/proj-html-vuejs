<template>
  <section>
    <div class="text">
      <h2>
        The Trusted Name <br />
        for In-Home Tutoring.
      </h2>
      <p>
        Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
        lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio
        sit amet nibh vulputate cursus mauris.
      </p>
      <a href="/courses"><span>learn more</span></a>
    </div>
    <div class="img">
      <img src="../../assets/img/h5-img-1.jpg" alt="learning" />
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp3",
};
</script>

<style lang="scss" scoped>
@import "../../mixin";

.text {
  padding: $def-padding $def-padding 0;
  h2 {
    font-family: $merryweather;
    font-size: 3rem;
    color: $darkgray;
  }
  p {
    font-family: $roboto;
    font-size: 1.5rem;
    color: $mediumgray;
    line-height: $def-lineheight;
    margin: 30px 0;
  }
  a {
    text-decoration: none;
    span {
      font-family: $roboto;
      font-size: 1.5rem;
      font-weight: bold;
      font-variant: small-caps;
      color: $lightcyan;
    }
    &:hover {
      span {
        color: $darkcyan;
      }
    }
  }
}
.img {
  padding: 0 $def-padding;
  img{
      width: 100%;
  }
}
</style>