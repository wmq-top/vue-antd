<template>
  <div id="thirdpage">
    <ul>
      <li v-for="(item,index) in Applist" :key="index" class="iconcontent">
        <DesktopIconSmall></DesktopIconSmall>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import DesktopIconSmall from "../components/DesktopIconSmall.vue";
export default {
  name: "thirdpage",
  data() {
    return {
      Applist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  components: {
    DesktopIconSmall
  }
};
</script>

<style>
#thirdpage {
  position: absolute;
  top: 0;
  left: 202.5vw;
  width: 95vw;
  height: 78vh;
}
#thirdpage ul {
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-flow: row wrap;
  position: absolute;
}
</style>

