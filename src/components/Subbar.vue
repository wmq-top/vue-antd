<template>
  <div>
    <ul
      id="listbar"
      @touchstart="addtouchclass"
      @touchend="removetouchclass"
      :class="{activebar: activetouch}"
    >
      <li id="barname">
        <slot name="subbarname"></slot>
      </li>
      <li id="baricon">
        <slot name="detial"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Subbar",
  data() {
    return {
      activetouch: false
    };
  },
  methods: {
    addtouchclass() {
      this.activetouch = true;
    },
    removetouchclass() {
      this.activetouch = false;
    }
  }
};
</script>

<style>
.activebar {
  background-color: rgb(230, 230, 230) !important;
}
#listbar {
  height: 7.5vh;
  width: 100%;
  background-color: #fff;
  border-radius: 2vh;
  margin: 0 auto;
  border: 4px solid white;
}
#barname {
  float: left;
  font-size: 2.3vh;
  line-height: 7.5vh;
  padding-left: 4vw;
}
#baricon {
  float: right;
  font-size: 2.3vh;
  line-height: 7.5vh;
  padding-right: 4vw;
}
</style>

