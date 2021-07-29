<template>
  <div class="FirstLvSub">
    <Topbar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
    </Topbar>
    <div id="Battention">
      <span id="batteryrest">
        {{batteryrest}}
        <span>%</span>
      </span>
      <span id="textrestime">预计可使用时间{{resttime[0]}}小时{{resttime[1]}}分钟</span>
    </div>
    <div id="modechocie">
      <ul>
        <li class="modechocie">
          <span class="modetitle">性能模式</span>
          <br />
          <span
            class="specialModeRestTime"
          >预计可使用时间{{resttimefornatureMode[0]}}小时{{resttimefornatureMode[1]}}分钟</span>
          <br />
          <span>可提升设备性能但是增加耗电和发热</span>
          <a-switch :checked="natureEnable" @change="ChangetoNature" class="Modeenable" />
        </li>
        <li class="modechocie">
          <span class="modetitle">省电模式</span>
          <br />
          <span
            class="specialModeRestTime"
          >预计可使用时间{{resttimefornatureMode[0]}}小时{{resttimefornatureMode[1]}}分钟</span>
          <br />
          <span>关闭5G、自动同步，限制后台应用连接网络</span>
          <a-switch :checked="saveEnable" @change="ChangetoSave" class="Modeenable" />
        </li>
        <li class="modechocie">
          <span class="modetitle">超级省电</span>
          <br />
          <span
            class="specialModeRestTime"
          >预计可使用时间{{resttimefornatureMode[0]}}小时{{resttimefornatureMode[1]}}分钟</span>
          <br />
          <span>仅部分应用可以使用</span>
          <a-switch :checked="supersaveEnable" @change="ChangetoSupersave" class="Modeenable" />
        </li>
      </ul>
    </div>
    <div id="electricityshow" class="modechocie">
      <span class="modetitle" @click="showDrawer">
        电量百分比显示方式
        <span class="restelectricshow">
          {{electricityshowmethodoption[electricityshowmethodoptionindex]}}
          <a-icon type="right" />
        </span>
      </span>
    </div>
    <div>
      <a-drawer
        v-if="visible"
        title="电量百分比显示方式"
        :placement="placement"
        :closable="false"
        :visible="visible"
        @close="onClose"
      >
        <a-radio-group v-model="value" @change="onChange">
          <a-radio :style="radioStyle" :value="0">不显示</a-radio>
          <a-radio :style="radioStyle" :value="1">电池图标外</a-radio>
          <a-radio :style="radioStyle" :value="2">电池图标内</a-radio>
        </a-radio-group>
      </a-drawer>
    </div>
  </div>
</template>

<script>
import Topbar from "../../components/Topbar.vue";
export default {
  name: "Battery",
  data() {
    return {
      name: "电池",
      batteryrest: 60,
      Mode: ["nature", "save", "supersave"],
      natureEnable: false,
      saveEnable: false,
      supersaveEnable: false,
      RPC: {},
      visible: false,
      placement: "bottom",
      electricityshowmethodoption: ["不显示", "在图标外部显示", "在图标内部显示"],
      electricityshowmethodoptionindex: 2,
      value: 1,
      radioStyle: {
        display: "block",
        height: "5vh",
        lineHeight: "5vh",
        fontSize: "2.2vh"
      }
    };
  },

  created() {
    axios({
      method: "GET",
      url: "http://192.168.3.56:3000/battery"
    }).then(res => {
      this.batteryrest = res.data[0].rest;
    });
    axios({
      method: "GET",
      url: "http://192.168.3.56:3000/batterymode"
    }).then(res => {
      this.RPC = Object.assign({}, res.data);
      this.natureEnable = res.data[0].enable;
      this.saveEnable = res.data[1].enable;
      this.supersaveEnable = res.data[2].enable;
    });
    axios({
      method: "GET",
      url: "http://192.168.3.56:3000/elerestshowmethod/1"
    }).then(res => {
      this.electricityshowmethodoptionindex = res.data.mode;

    });
  },
  components: {
    Topbar
  },
  computed: {
    resttime() {
      return [
        Math.floor((this.batteryrest * 15) / 60),
        (this.batteryrest * 15) % 60
      ];
    },
    resttimefornatureMode() {
      return [
        Math.floor((this.batteryrest * 10) / 60),
        (this.batteryrest * 10) % 60
      ];
    }
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      console.log("radio checked", e.target.value);
      this.electricityshowmethodoptionindex = e.target.value;
      this.onClose()
    },
    sendmessagetoparent() {
      axios({
        method: "PUT",
        url: "http://192.168.3.56:3000/batteryMode/1",
        data: this.RPC[0]
      });
      axios({
        method: "PUT",
        url: "http://192.168.3.56:3000/batteryMode/2",
        data: this.RPC[1]
      });
      axios({
        method: "PUT",
        url: "http://192.168.3.56:3000/batteryMode/3",
        data: this.RPC[2]
      });
      axios({
        method: "PUT",
        url: "http://192.168.3.56:3000/elerestshowmethod/1",
        data: {
          mode: this.electricityshowmethodoptionindex
        }
      });
      this.$emit("batterypagemessage", false);
    },
    
    ChangetoNature(checked) {
      this.natureEnable = checked;
      if (checked) {
        this.saveEnable = false;
        this.supersaveEnable = false;
      }
      //console.log(`ChangetoNature ${checked}`);
    },
    ChangetoSave(checked) {
      if (checked) {
        this.natureEnable = false;
        this.supersaveEnable = false;
      }
      this.saveEnable = checked;
      //console.log(`ChangetoSave ${checked}`);
    },
    ChangetoSupersave(checked) {
      if (checked) {
        this.natureEnable = false;
        this.saveEnable = false;
      }
      this.supersaveEnable = checked;
      //console.log(`ChangetoSupersave ${checked}`);
    }
  },
  watch: {
    natureEnable(newval, oldval) {
      this.RPC[0].enable = newval;
    },
    saveEnable(newval, oldval) {
      this.RPC[1].enable = newval;
    },
    supersaveEnable(newval, oldval) {
      this.RPC[2].enable = newval;
    }
  }
};
</script>

<style>
#Battention {
  width: 95%;
  height: 11vh;
  margin: 1vh auto;
  position: relative;
}
#batteryrest {
  position: absolute;
  top: 0;
  left: 3vw;
  font-size: 6vh;
}
#batteryrest span {
  font-size: 3vh;
}
#textrestime {
  position: absolute;
  bottom: 0vh;
  left: 3vw;
  font-size: 2vh;
}
.modechocie {
  padding-top: 2vh;
  padding-bottom: 1vh;
  padding-left: 3vw;
  width: 95%;
  height: 13vh;
  text-align: left;
  line-height: 3vh;
  background-color: #fff;
  margin: 1.5vh auto;
  border-radius: 2vh;
  position: relative;
}
.modetitle {
  font-size: 2.5vh;
  font-weight: 600;
}
.specialModeRestTime {
  font-size: 2vh;
}
.Modeenable {
  position: absolute;
  right: 4vw;
  top: 5vh;
}
#electricityshow {
  height: 7vh;
}
.ant-drawer .ant-drawer-content {
  margin: -2vh auto;
  width: 95%;
  border-radius: 3vh;
}
.ant-drawer-title {
  font-size: 2.5vh;
  font-weight: 600;
}
.restelectricshow {
  position: absolute;
  font-size: 2vh;
  font-weight: 500;
  right: 2vh;
}
</style>

