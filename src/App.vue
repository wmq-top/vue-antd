<template>
  <div id="app">
    <div id="pulldowminduction" @touchstart="pullmenushowtend" @touchend="pullmenushowcheck"></div>
    <PullMenu v-if="pullmenushow" v-on:messagefrompullmenu="closemrnupull" v-bind:pullmenushow="pullmenushow"></PullMenu>
    <router-view></router-view>
  </div>
</template>
<script>
import LogIn from "./components/LogIn.vue";
import PullMenu from "./components/PullMenu.vue"
export default {
  name: "App",
  data() {
    return {
      isLogIn: false,
      shartpos: 0,
      pullmenushow: false,
    };
  },
  created() {
    axios({
      method: "GET",
      url: "http://192.168.3.56:3000/basicmes",
    })
    .then((res) => {
      this.$store.commit("chagelanguange",res.data[0].language)      
    });
  },
  components: {
    LogIn,
    PullMenu
  },
  methods: {
    pullmenushowtend(e) {
      this.shartpos = e.targetTouches[0].clientY
    },
    pullmenushowcheck(e) {
      if(e.changedTouches[0].clientY > this.shartpos) {
        this.pullmenushow = true
      }
    },
    closemrnupull(data) {
      this.pullmenushow = data
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#pulldowminduction {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3vh;
  background-color: transparent;
  z-index: 999;
}
.FirstLvSub {
  position: absolute;
  z-index: 9;
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  overflow: scroll;
  top: 0;
  background-color: rgb(238, 238, 238);
}
.titlescript {
  text-align: left;
  padding-left: 6vw;
  font-size: 2vh;
  color: rgb(36, 32, 32);
  margin-top: 1vh;
}
.tiptitletext {
  text-align: left;
  margin-left: 5vw;
  font-size: 2.2vh;
  float: left;
  margin-bottom: 1vh;
  margin-top: 3vh;
}
.SecondLvSub {
  position: absolute;
  z-index: 99;
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  overflow: scroll;
  left: 100vw;
  top: 0;
  background-color: rgb(238, 238, 238);
}
.transformbar {
  animation: move 0.3s linear 1;
  animation-fill-mode: forwards;
}
@keyframes move {
  0% {
    left: 100vw;
  }
  50% {
    left: 50vw;
  }
  100% {
    left: 0vw;
  }
}
.titletexttip {
  display: block;
  width: 100vw;
  height: 3vh;
  text-align: left;
  font-size: 2vh;
  padding-left: 5vw;
  margin-top: 2.5vh;
  margin-bottom: 0.5vh;
}
</style>



