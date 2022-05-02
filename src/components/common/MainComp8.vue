<template>
  <section>
    <div class="container hex-bg">
      <div class="centered-section-title">
        <h2>Pricing Plans</h2>
        <p>
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
          lorem quis bibendum auci
        </p>
      </div>
      <div class="table">
        <div class="buttons">
          <div>
            <img
              src="../../assets/img/60699165_459440804828391_7177805742290763776_o.png"
              alt="mikado logo"
            />
          </div>
          <div>
            <img src="../../assets/svg/cart.svg" alt="cart" class="cart" />
          </div>
        </div>
        <div class="cell-names">
          <div class="header">
            <h2>{{ cell_names.header }}</h2>
          </div>
          <div class="cells" v-for="(elm, i) in cell_names.cells" :key="i">
            <p>{{ elm }}</p>
          </div>
          <div class="cells empty"></div>
        </div>
        <div class="plans">
          <div class="plan" v-for="(elm, i) in plans" :key="i">
            <div class="header">
              <img
                :src="require('../../assets/img/' + elm.img)"
                :alt="elm.name"
                :class="elm.name"
              />
              <h2>{{ elm.name }}</h2>
              <p>${{ elm.price }}</p>
            </div>
            <div class="cells">
              <p>{{ elm.n_courses }}</p>
            </div>
            <div class="cells">
              <p>{{ elm.time_days }} Days</p>
            </div>
            <div class="cells" v-for="(course, i) in elm.courses" :key="i">
              <img
                src="../../assets/svg/check.svg"
                alt="check"
                v-show="course == true"
                class="check"
              />
              <img
                src="../../assets/svg/cross.svg"
                alt="cross"
                v-show="course == false"
                class="cross"
              />
            </div>
            <div class="buttoncell">
              <button class="white-btn">get it now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainComp8",
  data() {
    return {
      cell_names: {
        header: "Save up to 40% by paying weekly",
        cells: [
          "Number of Courses",
          "Time",
          "Web Designing",
          "Human-Centered Design",
          "Basic Marketing",
          "Python for Everybody",
          "Android Developer",
          "Business English",
        ],
      },
      plans: [
        {
          name: "Standard",
          img: "h5-custom-icon-7.png",
          price: 12,
          n_courses: 2,
          time_days: 15,
          courses: [true, true, false, false, false, false],
        },
        {
          name: "Professional",
          img: "h5-custom-icon-8.png",
          price: 59,
          n_courses: 4,
          time_days: 30,
          courses: [true, true, true, true, false, false],
        },
        {
          name: "Advanced",
          img: "h5-custom-icon-9.png",
          price: 88,
          n_courses: 6,
          time_days: 30,
          courses: [true, true, true, true, true, true],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";
.container {
  background-image: url("../../assets/img/page-background-img.png");
  position: relative;
  padding-bottom: 150px;
  .table {
    margin: 0 $def-padding;
    display: flex;
    background: $white;
    .buttons {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 130px;
      top: 700px;
      right: 0;
      div {
        width: 55px;
        height: 55px;
        background: white;
        display: flex;
        box-shadow: 2px 2px 10px 0px $lightgray;
        cursor: pointer;
        transition: $short-trans;
        &:hover {
          filter: brightness(0.9);
        }
      }
      img.cart {
        width: 50%;
        margin: auto;
        filter: $red-filter;
      }
    }
    h2 {
      font-family: $merryweather;
      font-size: 2rem;
      color: $darkgray;
    }
    .header {
      height: 400px;
      border: 2px solid $lightgray;
      border-top: 5px solid $lightcyantrans;
      padding: 50px 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img {
        width: 40%;
        margin: auto;
      }
    }
    .cells {
      border: 2px solid $lightgray;
      border-top: none;
      padding: 20px 50px;
      height: 70px;
    }
    .empty {
      border-left: none;
      border-bottom: none;
      height: 100px;
    }
    .cell-names {
      display: flex;
      flex-direction: column;
      width: 25%;
      text-align: bottom;
      .cells {
        font-family: $merryweather;
        font-weight: bold;
        color: $mediumgray;
      }
    }
  }
  .plans {
    text-align: center;
    display: flex;
    .plan {
      width: 400px;
      display: flex;
      flex-direction: column;
      &:hover {
        .header {
          border-top-color: $lightcyan;
        }
        .cells {
          background: $lightcyantranshover;
        }
      }
    }
    .header {
      border-left: none;
      background: $lightcyantranshover;
      p {
        font-family: $roboto;
        font-weight: bold;
        color: $mediumgray;
        margin: 20px 0 0;
      }
    }
    .cells {
      font-family: $roboto;
      color: $mediumgray;
      border-left: none;
      .check {
        width: 13%;
        transform: translateY(-7px);
        filter: $cyan-filter;
      }
      .cross {
        width: 10%;
        filter: opacity(0.5);
      }
    }
    .buttoncell {
      height: 100px;
      border: 2px solid $lightgray;
      border-left: none;
      border-top: none;
      background: $lightcyantranshover;
      button {
        margin: 16px 0;
      }
    }
  }
}
</style>