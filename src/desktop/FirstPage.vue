<template>
  <div id="firstpage">
    <div id="desktopclock">
      {{hour}}
      <span>:</span>
      {{min}}
    </div>
    <div id="datamess">{{month}}月{{date}}日星期{{week}}</div>
    <ul id="Desktopcontentfir">
      <li v-for="(item, index) in Applist" :key="index" class="iconcontent">
        <DesktopIconSmall></DesktopIconSmall>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import DesktopIconSmall from "../components/DesktopIconSmall.vue";
export default {
  name: "firstpage",
  data() {
    return {
      Applist: [
        "相机",
        "图库",
        "支付宝",
        "美团",
        "应用市场",
        "信息",
        "qq",
        "得物"
      ],
      hour: 0,
      min: 0,
      timer: "",
      date: "",
      month: "",
      week: ""
    };
  },
  created() {
    this.get();
    this.timer = setInterval(this.get(), 1000);
  },
  components: {
    DesktopIconSmall
  },
  methods: {
    get() {
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();

      if (hour > 12) {
        hour -= 12;
      }
      if (min < 10) {
        min = "0" + min;
      }
      this.hour = hour;
      this.min = min;
      this.date = date.getDate();
      this.month = date.getMonth();
      this.week = date.getDay();
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style>
#desktopclock {
  width: 50vw;
  height: 16vh;
  margin: auto;
  padding-top: 6vh;
  font-size: 8vh;
  color: white;
  text-align: center;
}
#firstpage {
  height: 78vh;
  width: 95vw;
  margin: 0 auto;
  position: absolute;
  left: 2.5vw;
  top: 0;
  /* background-color: rgba(255, 255, 255, 0.2); */
}
.iconcontent {
  width: 25%;
  height: 20vw;
  border-radius: 3vw;
  flex-wrap: wrap;
  margin-top: 5vh;
  color: white;
}
#Desktopcontentfir {
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-flow: row wrap;
  position: absolute;
  bottom: 0;
}
#datamess {
  color: white;
}
</style>

