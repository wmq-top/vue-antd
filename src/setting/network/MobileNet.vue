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
  name: "MobileNet",
  data() {
    return {
      name: "移动网络",
    };
  },
  components: {
    TopBar,
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("mobilenetpagemessage", false);
    },
  },
};
</script>

<style>
</style>