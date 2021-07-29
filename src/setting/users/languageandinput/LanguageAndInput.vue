<template>
  <div id="languageandinput" class="SecondLvSub transformbar">
    <Topbar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
    </Topbar>
    <span class="titletexttip">{{textlist[0]}}</span>
    <div @click="toLanguageAndLocation" class="languagelist">
      <Subbar>
        <template slot="subbarname">{{textlist[1]}}</template>
        <template slot="detial">
          <a-icon type="right" />
        </template>
      </Subbar>
    </div>

    <span class="titletexttip">{{textlist[2]}}</span>
    <div class="languagelist">
      <Subbar>
        <template slot="subbarname">{{textlist[0]}}</template>
        <template slot="detial">
          <a-icon type="right" />
        </template>
      </Subbar>
    </div>

    <LanguageAndLocation
      v-if="languageandlocationshow"
      v-on:languageandlocation="messagefromLanguageAndLocation"
    ></LanguageAndLocation>
  </div>
</template>

<script>
import Topbar from "../../../components/Topbar.vue";
import Subbar from "../../../components/Subbar.vue";
import LanguageAndLocation from "./languageandlocation/LanguageAndLocation.vue";
export default {
  name: "LanguageAndInput",
  data() {
    return {
      name: "语言和输入法",
      textlist: ["语言", "语言和地区", "输入法"],
      languageandlocationshow: false
    };
  },
  components: {
    Topbar,
    Subbar,
    LanguageAndLocation
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("languageandinput", false);
    },
    toLanguageAndLocation() {
      this.languageandlocationshow = true;
    },
    messagefromLanguageAndLocation(data) {
      this.languageandlocationshow = data;
    }
  }
};
</script>

<style>
</style>

