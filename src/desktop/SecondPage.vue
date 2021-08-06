<template>
  <div id="secondpage">
    <ul>
      <li v-for="(item,index) in Applist" :key="index" class="iconcontent" @click="toAPP(index)">
        <DesktopIconSmall></DesktopIconSmall>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import DesktopIconSmall from "../components/DesktopIconSmall.vue";
export default {
  name: "secondpage",
  data() {
    return {
      Applist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
    };
  },
  components: {
    DesktopIconSmall
  },
  methods: {
    toAPP(index) {
      if(index == 0) {
        this.$router.push('/Caculate')
      } else if(index ==1) {
        this.$router.push('/Leetcode')
      }
    }
  }
};
</script>

<style>
#secondpage {
  position: absolute;
  top: 0;
  left: 102.5vw;
  width: 95vw;
  height: 78vh;
}
#secondpage ul {
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-flow: row wrap;
  position: absolute;
}
</style>

