<template>
  <div class="FirstLvSub">
    <TopBar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{ name }}</template>
      <template slot="helpenable">
        <a-icon type="question-circle" />
      </template>
    </TopBar>
  </div>
</template>

<script>
import TopBar from "../../components/Topbar.vue";
export default {
  name: "Privacy",
  data() {
    return {
      name: "隐私",
    };
  },
  components: {
    TopBar,
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("privacypagemessage", false);
    },
  },
};
</script>

<style>
</style>