<template>
  <div id="desktop">
    <div
      id="scrollbox"
      @touchstart="pagechangestart"
      @touchmove="pagechangemove"
      @touchend="pagechangeend"
    >
      <Firstpage></Firstpage>
      <secondPage></secondPage>
      <Thirdpage></Thirdpage>
    </div>

    <div id="currentnode">
      <li
        v-for="(item,index) in currentpagenumber"
        :key="index"
        :class="{currentpagenode: currentpage == index}"
      ></li>
    </div>

    <Bottombar></Bottombar>

    <router-link to="/Setting"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Bottombar from "../components/Bottombar.vue";
import Firstpage from "./FirstPage.vue";
import SecondPage from "./SecondPage.vue";
import Thirdpage from "./ThirdPage.vue"
export default {
  name: "desktop",
  data() {
    return {
      currentpagenumber: [0, 1, 2],
      currentpage: 0,
      touchstart: 0,
      touchend: 0
    };
  },
  components: {
    Bottombar,
    Firstpage,
    SecondPage,
    Thirdpage
  },
  methods: {
    topage() {},
    pagechangestart(e) {
      this.touchstart = e.changedTouches[0].clientX;
    },
    pagechangemove(e) {
      let scrollbox = document.getElementById("scrollbox");
      if (this.currentpage == 0) {
        scrollbox.style.left =
          -(this.touchstart - e.changedTouches[0].clientX) + "px";
      } else if (this.currentpage == 1) {
        scrollbox.style.left =
          -document.body.clientWidth -
          (this.touchstart - e.changedTouches[0].clientX) +
          "px";
      } else if (this.currentpage == 2) {
        scrollbox.style.left =
          -document.body.clientWidth -
          document.body.clientWidth -
          (this.touchstart - e.changedTouches[0].clientX) +
          "px";
      }
    },
    pagechangeend(e) {
      let scrollbox = document.getElementById("scrollbox");
      let limitwidth = document.body.clientWidth * 0.2;
      this.touchend = e.changedTouches[0].clientX;
      //第一页向右滑动
      if (this.currentpage == 0 && this.touchend > this.touchstart) {
        scrollbox.style.left = 0;
      }
      //第三页向左滑动
      if (this.currentpage == 2 && this.touchend < this.touchstart) {
        scrollbox.style.left = -200 + "vw";
        return
      }
      //第一页向左滑动但是不超过限制
      if (
        this.currentpage == 0 &&
        this.touchstart - this.touchend < limitwidth
      ) {
        scrollbox.style.left = 0;
      }
      //第一页向左滑动且超过限制 跳转到第二页
      if (
        this.currentpage == 0 &&
        this.touchstart - this.touchend > limitwidth
      ) {
        scrollbox.style.left = -100 + "vw";
        this.currentpage = 1;
        return
      }
      //第二页逻辑向左滑动 且不超过限制
      if (
        this.currentpage == 1 &&
        this.touchstart - this.touchend < limitwidth
      ) {
        scrollbox.style.left = -100 + "vw";
      }
      //第二页向右滑动 且不超过限制
      if (
        this.currentpage == 1 &&
        this.touchend - this.touchstart < limitwidth
      ) {
        scrollbox.style.left = -100 + "vw";
      }
      //第二页向右滑动且超过限制
      if (
        this.currentpage == 1 &&
        this.touchend - this.touchstart > limitwidth
      ) {
        scrollbox.style.left = 0 + "vw";
        this.currentpage = 0;
      }
      //第二页向左滑动且超过限制
      if (
        this.currentpage == 1 &&
        this.touchstart - this.touchend > limitwidth
      ) {
        scrollbox.style.left = -200 + "vw";
        this.currentpage = 2;
      }
      //第三页向右滑动且不超限制
      if (
        this.currentpage == 2 &&
        this.touchend - this.touchstart < limitwidth
      ) {
        scrollbox.style.left = -200 + "vw";
      }
      //第三页向右滑动且超过限制
      if (
        this.currentpage == 2 &&
        this.touchend - this.touchstart > limitwidth
      ) {
        scrollbox.style.left = -100 + "vw";
        this.currentpage = 1;
      }
    }
  }
};
</script>

<style>
#desktop {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
    200% 100% at bottom center,
    rgb(75, 203, 223),
    rgb(49, 165, 197),
    rgb(50, 98, 234)
  );
  background: radial-gradient(
    220% 105% at top center,
    rgb(49, 165, 197) 10%,
    rgb(50, 98, 234) 40%,
    rgb(40, 101, 225) 65%,
    rgb(75, 203, 223) 90%
  );
  background-attachment: fixed;
}
#currentnode {
  display: flex;
  font-size: 3vh;
  width: 10vw;
  height: 4vh;
  justify-content: space-around;
  position: fixed;
  bottom: 14vh;
  left: 45vw;
}
#currentnode li {
  width: 0.65vh;
  height: 0.65vh;
  border-radius: 0.25vh;
  background-color: rgba(255, 255, 255, 0.8);
}
.currentpagenode {
  width: 1.5vh !important;
}
#scrollbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 300vw;
  height: 78vh;
  overflow: scroll;
  z-index: 2;
}
</style>

