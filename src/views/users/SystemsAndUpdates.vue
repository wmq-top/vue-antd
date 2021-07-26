<template>
  <div class="FirstLvSub" id="systemsandupdata">
    <Topbar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
      <template slot="helpenable">
        <a-icon type="question-circle" />
      </template>
    </Topbar>
    <div>
      <ul id="systems">
        <li
          v-for="(item, index) in lilist"
          :key="index"
          :class="{touchactive : isActive == index}"
          @touchstart="activechange(index)"
          @touchend="activechangeend"
        >
          {{item}}
          <span>
            <a-icon type="right" class="detialpage" />
          </span>
        </li>
      </ul>
    </div>
    <LanguageAndInput 
      v-if="LanguageAndInputshow"
      v-on:languageandinput="messagefromLanguageAndInput"
    ></LanguageAndInput>
  </div>
</template>

<script>
import Topbar from "../../components/Topbar.vue";
import LanguageAndInput from "./languageandinput/LanguageAndInput.vue";
export default {
  name: "SystemsAndUpdates",
  data() {
    return {
      name: "系统和更新",
      lilist: ["软件更新", "系统导航方式", "语言和输入法"],
      isActive: 999,
      LanguageAndInputshow: false
    };
  },
  components: {
    Topbar,
    LanguageAndInput
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("systemsandupdates", false);
    },
    activechange(index) {
      this.isActive = index;
      this.jumptocurrentpage(index);
    },
    activechangeend() {
      this.isActive = 999;
    },
    messagefromLanguageAndInput(data) {
      this.LanguageAndInputshow = data;
    },
    jumptocurrentpage(index) {
      switch (index) {
        case 0:
          console.log("to-软件更新");
          break;
        case 1:
          console.log("to-系统导航方式");
          break;
        case 2:
          this.LanguageAndInputshow = true;
      }
    }
  }
};
</script>

<style>
#systemsandupdata {
  overflow: hidden;
}
#systems {
  width: 95%;
  height: 48vh;
  border-radius: 2vh;
  margin: 0 auto;  
}

#systems li {
  width: 100%;
  height: 9vh;
  background-color: white;
  margin: 1.5vh auto;
  border-radius: 2vh;
  border: 4px solid white;
  line-height: 9vh;
  font-size: 2.3vh;
  text-align: left;
  padding-left: 2vw;
  font-weight: 500;
  /* font-family: "microsoft yahei", "Times New Roman"; */
}
#systems .touchactive {
  background-color: rgb(230, 230, 230);
}
li span .detialpage {
  font-size: 2vh;
  font-weight: 200;
  float: right;
  padding-top: 3vh;
  padding-right: 3vw;
}
</style>

