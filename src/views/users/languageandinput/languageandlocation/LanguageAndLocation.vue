<template>
  <div id="languageandlocation" class="SecondLvSub transformbar">
    <Topbar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
    </Topbar>
    <span class="titletexttip">{{textlist[0]}}</span>
    <div class="languagelist">
      <div @click="changelangCN">
        <Subbar>
        <template slot="subbarname">{{textlist[1]}}</template>
        <template slot="detial" v-if="langcheck" >
          <a-icon type="check" />
        </template>
      </Subbar>
      </div>
      
      <div class="bottonborder" ></div>
      <div @click="changelangEN">
        <Subbar>
        <template slot="subbarname">{{textlist[2]}}</template>
        <template slot="detial" v-if="!langcheck">
          <a-icon type="check" />
        </template>
      </Subbar>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import Topbar from "../../../../components/Topbar.vue";
import Subbar from "../../../../components/Subbar.vue"; 

export default {
  name: "LanguageAndLocation.vue",
  data() {
    return {
      name: "语言和地区",
      textlist: ["语言","简体中文","English"],
      langcheck: true
    };
  },
  components: {
    Topbar,
    Subbar
  },
  methods: {
    sendmessagetoparent() {
        this.$emit("languageandlocation", false);
    },
    changelangCN() {
      this.langcheck = true
    },
    changelangEN() {
      this.langcheck = false
      
    }
  }
};
</script>

<style>
.languagelist {
  background-color: #fff;
  border-radius: 2vh;
  width: 95%;
  margin: 0 auto;
}
.bottonborder {
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: rgb(230, 230, 230);
}
</style>

