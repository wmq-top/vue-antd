<template>
  <div id="Wlansetting" class="FirstLvSub">
    <TopBar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
      <template slot="helpenable">
        <a-icon type="question-circle" />
      </template>
    </TopBar>
    <div class="subbar2" id="Wlanset">
      <ul>
        <li>
          <span>
            WLAN
            <a-switch :checked="WlANEnable" @change="onChange" class="Enablebutton" />
          </span>
        </li>
        <li>
          <span>
            网络加速
            <a-icon type="right" class="detialpage" />
          </span>
        </li>
        <li>
          <span>
            更多WLAN设置
            <a-icon type="right" class="detialpage" />
          </span>
        </li>
      </ul>
    </div>

    <div class="subbar2" v-if="WlANEnable">
      <ul>
        <li v-for="(item,i) in WlanList" :key="i">
          <span>
            {{item.username}}
            <a-icon type="wifi" class="detialpage" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopBar from "../../components/Topbar.vue";
export default {
  name: "Wlan",
  data() {
    return {
      name: "WLAN",
      WlANEnable: false,
      WlanList: []
    };
  },
  computed: {},
  created() {
    axios({
      method: "GET",
      url: "http://localhost:3000/wlan/1"
    }).then(res => {
      this.WlANEnable = res.data.Enable;
    });
    axios({
      method: "GET",
      url: "http://localhost:3000/wlan/2"
    }).then(res => {
      console.log(res.data.wlanlist);
      this.WlanList = res.data.wlanlist;
    });
  },
  components: {
    TopBar
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("wlanpagemessage", false);
    },
    onChange(checked) {
      this.WlANEnable = checked;
    }
  },
  beforeDestroy() {
    axios({
      method: "PUT",
      url: "http://localhost:3000/wlan/1",
      data: {
        Enable: this.WlANEnable,
        wlanlist: this.WlanList
      }
    });
  }
};
</script>

<style>
#Wlanset {
  max-height: 24vh;
  overflow: hidden;
}
.subbar2 {
  border-radius: 3vh;
  overflow: hidden;
  width: 95%;
  margin: 2vh auto;
  background-color: white;
}
.subbar2 li {
  height: 8vh;
  line-height: 8vh;
  font-size: 2.2vh;
}
.subbar2 li span {
  box-sizing: content-box;
  width: 90%;
  border-bottom: 1px solid rgb(217, 217, 217);
  float: left;
  margin-left: 4vw;
  font-weight: 500;
  font-family: STHeiti;
  text-align: left;
}
.subbar2 li span .detialpage {
  font-size: 2vh;
  font-weight: 200;
  float: right;
  padding-top: 3vh;
  padding-right: 0vw;
}
.subbar2 li span .ant-switch-inner {
  border: none;
}
.subbar2 li span .Enablebutton {
  float: right;
  padding-right: 0vh;
  margin-top: 2.3vh;
}
</style>

