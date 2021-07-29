<template>
  <div id="bottombar">
    <ul id="bottombarcontent">
      <li class="desktopicon">
        <Desktopiconsmall></Desktopiconsmall>
      </li>
      <li class="desktopicon">
        <Desktopiconsmall></Desktopiconsmall>
      </li>
      <li class="desktopicon">
        <Desktopiconsmall></Desktopiconsmall>
      </li>
      <li class="desktopicon" @click="tosettingpage">
        <Desktopiconsmall></Desktopiconsmall>
      </li>
    </ul>
  </div>
</template>

<script>
import Desktopiconsmall from "./DesktopIconSmall.vue";
export default {
  name: "bottombar",
  components: {
    Desktopiconsmall
  },
  methods: {
    tosettingpage() {
      //console.log('tosettingpage')
      this.$router.push('/Setting')
    }
  }
};
</script>

<style>
#bottombar {
  position: fixed;
  bottom: 4vh;
  left: 0;
  width: 95vw;
  left: 2.5vw;
  height: 16vw;
  /* background-color: rgba(11, 11, 1, 0.2); */
}
#bottombarcontent {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.desktopicon {
  width: 15vw;
  height: 15vw;
  flex: 1;
}
</style>

