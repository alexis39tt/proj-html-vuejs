<template>
  <div id="navbar">
    <div id="logo">
      <img src="../../assets/img/logo-light.png" alt="logo" />
    </div>
    <div id="links">
      <ul>
        <a v-for="(elm, i) in navbar_links" :key="i" :href="elm.link">
          <li>{{ elm.title }}</li>
        </a>
      </ul>
    </div>
    <div id="icons">
      <div>
        <img src="../../assets/svg/search.svg" alt="search" class="search" />
      </div>
      <div>
        <img src="../../assets/svg/shopping_bag.svg" alt="shopping bag" />
        <div class="items">
          <p>{{ cart_items }}</p>
        </div>
      </div>
      <div>
        <img src="../../assets/svg/menu.svg" alt="menu" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
      cart_items: 0,
      navbar_links: [
        {
          title: "home",
          link: "/home",
        },
        {
          title: "courses",
          link: "/courses",
        },
        {
          title: "instructors",
          link: "/instructors",
        },
        {
          title: "events",
          link: "/events",
        },
        {
          title: "pages",
          link: "/pages",
        },
        {
          title: "elements",
          link: "/elements",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixin";

#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 180px;
  padding: 0 $def-padding;
  #logo {
    margin: auto 0;
    img {
      cursor: pointer;
    }
  }
  #links {
    width: 100%;
    line-height: 180px;
    ul {
      display: flex;
      justify-content: space-evenly;
      a {
        text-decoration: none;
        &:hover {
          li {
            color: $darkcyan;
          }
          li::after {
            width: 100%;
          }
        }
        li {
          text-transform: uppercase;
          font-family: $roboto;
          font-size: 1.2rem;
          color: $white;
          transition: color 0.3s;
        }
        li::after {
          content: "";
          width: 0%;
          display: inline-block;
          transform: translateY(-170px);
          border-bottom: 2px solid $darkcyan;
          transition: 0.5s;
        }
      }
    }
  }
  #icons {
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin: auto 0;
    div {
      position: relative;
      &:hover {
        div {
          background-color: $darkcyan;
        }
      }
      img {
        cursor: pointer;
        filter: invert(1);
        &:hover {
          filter: invert(0.9);
        }
      }
      .search {
        transform: scaleX(-1);
      }
      .items {
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: $lightcyan;
        top: 0;
        right: 0;
        border-radius: 50%;
        p {
          display: flex;
          justify-content: center;
          color: $white;
          font-family: $roboto;
          font-size: 0.8rem;
          line-height: 25px;
        }
      }
    }
  }
}
</style>