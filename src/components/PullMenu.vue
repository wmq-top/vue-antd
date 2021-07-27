<template>
  <div
    id="pullmenu"
    @touchstart="closepullmenu"
    @touchend="closepullmenucheck"
    :class="{ pullactive: pullmenushow, removeactive: removeclass }"
  >
    <div id="pullmenutitle">
      <span>控制中心</span>
      <a-icon type="setting" style="margin-left: 44vw" />
      <a-icon type="unlock" style="margin-left: 6vw" />
    </div>
    <div id="pulllibcard">
      <div id="musiccontrol">music control mode In development</div>
      <div id="pullwlan">
        <p
          class="pulliconPstyle"
          style="display: inline-block; float: left"
          @click="pullchangewifienable"
          :class="{ activeicon: wifienable }"
        >
          <a-icon type="wifi" />
        </p>
        <span style="line-height: 17vw; margin-left: -3vw">WLAN</span>
      </div>
      <div id="pullbluetooth">
        <p
          class="pulliconPstyle"
          style="display: inline-block; float: left"
          @click="pullchangeblueenable"
          :class="{ activeicon: bluetoothenable }"
        >
          <a-icon type="fork" />
        </p>
        <span style="line-height: 17vw; margin-left: -3vw">蓝牙</span>
      </div>
    </div>
    <div id="pulliconlist">
      <ul>
        <li v-for="(item, index) in iconlist" :key="index">
          <p
            :class="{ activeicon: item.enable }"
            @click="changeEnable(index)"
            class="pulliconPstyle"
          >
            <a-icon :type="item.icontype" />
          </p>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "pullmenu",
  data() {
    return {
      startpos: 0,
      endpos: 0,
      removeclass: false,
      iconlist: [],
      changelist: new Map(),
      wifienable: false,
      bluetoothenable: false,
      wifiList: [],
    };
  },
  created() {
    axios({
      method: "GET",
      url: "http://192.168.3.56:3000/wlan/1",
    }).then((res) => {
      this.wifienable = res.data.Enable;
      this.wifiList = res.data.wlanlist;
    });

    axios({
      method: "GET",
      url: "http://192.168.3.56:3000/pulllist",
    }).then((res) => {
      this.iconlist = res.data;
    });
  },
  props: {
    pullmenushow: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closepullmenu(e) {
      this.startpos = e.changedTouches[0].clientY;
    },
    closepullmenucheck(e) {
      if (e.changedTouches[0].clientY - this.startpos < -100) {
        this.removeclass = true;
        let that = this;
        setTimeout(() => {
          that.$emit("messagefrompullmenu", false);
        }, 300);
        // this.$emit("messagefrompullmenu", false);
      }
    },
    //超级好用的map结构，建议不兼容es6的设备升级，求求了
    changeEnable(index) {
      this.iconlist[index].enable = !this.iconlist[index].enable;
      if (this.changelist.has(this.iconlist[index].id)) {
        this.changelist.delete(this.iconlist[index].id);
      } else {
        this.changelist.set(
          this.iconlist[index].id,
          this.iconlist[index].enable
        );
      }
    },
    pullchangewifienable() {
      this.wifienable = !this.wifienable;
    },
    pullchangeblueenable() {
      this.bluetoothenable = !this.bluetoothenable;
    },
  },
  beforeDestroy() {
    axios({
      method: "PUT",
      url: "http://192.168.3.56:3000/wlan/1",
      data: {
        Enable: this.wifienable,
        wlanlist: this.wifiList,
      },
    });
    let that = this;
    this.changelist.forEach((item, key) => {
      axios({
        method: "PUT",
        url: "http://192.168.3.56:3000/pulllist/" + key,
        data: {
          id: key,
          name: that.iconlist[key - 1].name,
          icontype: that.iconlist[key - 1].icontype,
          enable: item,
        },
      });
    });
  },
};
</script>

<style>
#pullmenu {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(133, 133, 133, 0.9);
}
#pullmenutitle {
  width: 100vw;
  height: 6vh;
  font-size: 3.2vh;
  color: white;
  text-align: left;
  margin-top: 4vh;
  padding-left: 8vw;
}
.pullactive {
  animation: dropdowm 0.3s linear 1;
  animation-fill-mode: forwards;
}
#pulllibcard {
  width: 90%;
  position: relative;
  /* height: 18vh; */
  /* background-color: #fff; */
  margin: 0 auto;
  border-radius: 3vh;
  padding-left: 2.5vw;
}
#pulllibcard div {
  background-color: white;
  border-radius: 3vw;
}
#musiccontrol {
  width: 40vw;
  height: 38vw;
}
#pullwlan {
  padding-left: 1.5vw;
  position: absolute;
  right: 2.5vw;
  top: 0;
  width: 40vw;
  height: 17vw;
}
#pullbluetooth {
  padding-left: 1.5vw;
  position: absolute;
  right: 2.5vw;
  bottom: 0;
  width: 40vw;
  height: 17vw;
}
#pulliconlist ul {
  width: 86vw;
  height: 98vw;
  background: white;
  border-radius: 2vh;
  margin: 3vh auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2vw;
}
#pulliconlist li {
  width: 17vw;
  height: 24vw;
  font-size: 1.4vh;
}
.activeicon {
  background-color: rgb(10, 88, 246) !important;
  color: white;
}
.pulliconPstyle {
  width: 17vw;
  height: 17vw;
  border: 1.5vw solid white;
  text-align: center;
  line-height: 15.5vw;
  background-color: rgb(204, 204, 204);
  border-radius: 50%;
  font-size: 3.2vh;
  margin-bottom: 0;
}
/* #pulliconlist li p {
  width: 17vw;
  height: 17vw;
  border: 1.5vw solid white;
  text-align: center;
  line-height: 15.5vw;
  background-color: rgb(204, 204, 204);
  border-radius: 50%;
  font-size: 3.2vh;
  margin-bottom: 0;
} */
@keyframes dropdowm {
  0% {
    top: -100vh;
    background-color: rgba(133, 133, 133, 0.3);
  }
  50% {
    top: -50vh;
    background-color: rgba(133, 133, 133, 0.6);
  }
  100% {
    top: 0vh;
    background-color: rgba(133, 133, 133, 0.95);
  }
}
.removeactive {
  animation: dropon 0.3s linear 1;
  animation-fill-mode: forwards;
}
@keyframes dropon {
  0% {
    top: 0vh;
    background-color: rgba(133, 133, 133, 0.95);
  }
  50% {
    top: -50vh;
    background-color: rgba(133, 133, 133, 0.6);
  }
  100% {
    top: -100vh;
    background-color: rgba(133, 133, 133, 0.3);
  }
}
</style>

