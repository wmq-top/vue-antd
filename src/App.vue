<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import LogIn from "./components/LogIn.vue";
export default {
  name: "App",
  data() {
    return {
      isLogIn: false,
    };
  },
  created() {
    //console.log("组件创建成功");
  },
  components: {
    LogIn,
  },
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
.FirstLvSub {
  position: absolute;
  z-index: 99;
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
.transformbar {
  animation: move linear 0.4s 1;
  animation-fill-mode: forwards;
}
@keyframes move {
  0% {
    left: 100vw
  }
  50% {
    left: 50vw
  }
  100% {
    left: 0vw
  }
}
.SecondLvSub {
  width: 100vw;
  position: absolute;
  height: 100vh;
  top: 0;
  z-index: 99;
  background-color: rgb(230, 230, 230);;
}
.titletexttip {
  display: block;
  text-align: left;
  width: 100vw;
  height: 3vh;
  font-size: 2vh;
  margin-top: 2.5vh;
  padding-left: 5vw;
  margin-bottom: 1vh;
}
</style>



