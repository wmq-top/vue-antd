<template>
  <div class="FirstLvSub">
    <topbar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
    </topbar>
    <span class="tiptitletext">声音模式</span>
    <div id="voicemodecontent">
      <ul id="voicemodechecklist">
        <li @click="changevoicemodering">
          <div>
            <a-icon type="bell" class="voiceicon" :class="{acticon: ring}" />
          </div>
          <span class="voicetext">响铃</span>
          <div :class="{active: ring}" class="notchoice">
            <span></span>
          </div>
        </li>
        <div class="dividing"></div>
        <li @click="changevoicemodeshake">
          <div>
            <a-icon type="shake" class="voiceicon" :class="{acticon: shake}" />
          </div>
          <span class="voicetext">振动</span>
          <div :class="{active: shake}" class="notchoice">
            <span></span>
          </div>
        </li>
        <div class="dividing"></div>
        <li @click="changevoicemodemute">
          <div>
            <a-icon type="disconnect" class="voiceicon" :class="{acticon: mute}" />
          </div>
          <span class="voicetext">静音</span>
          <div :class="{active: mute}" class="notchoice">
            <span></span>
          </div>
        </li>
      </ul>
    </div>
    <div id="volumecontent">
      <div id="ringmesapl">
        <span>
          <a-icon type="bell" style="margin-right:3vw" />来电、信息、通知
        </span>
        <div
          id="sliderinput"
          class="sliderinput"
          @touchstart="nodechocice"
          @touchmove="nodemove"
          @touchend="nodeblur"
        >
          <div id="inputslder" class="inputslder">
            <div id="drapnode" class="drapnode"></div>
          </div>
        </div>
        <span style="display:block;margin-top: 4vh">
          <a-icon type="clock-circle" style="margin-right:3vw" />闹钟
        </span>
        <div
          id="sliderinputnoc"
          class="sliderinput"
          @touchstart="nocnodechocice"
          @touchmove="nocnodemove"
          @touchend="nocnodeblur"
        >
          <div id="inputsldernoc" class="inputslder">
            <div id="drapnodenoc" class="drapnode"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../../components/Topbar.vue";
//import SliderInputVue from "../../components/SliderInput.vue";
export default {
  name: "SoundAndVibration",
  data() {
    return {
      name: "声音和振动",
      ring: true,
      shake: false,
      mute: false,
      phonepercent: 0,
      clockpercent: 0
    };
  },
  components: {
    Topbar
  },
  computed: {
    bodyleftlimit: function() {
      return (
        (document.body.clientWidth - document.body.clientWidth * 0.95 * 0.95) /
        2
      );
    },
    bodyrightlimit: function() {
      return document.body.clientWidth * 0.95 * 0.95 - this.bodyleftlimit / 2;
    },
    sliderwrapwidth: function() {
      return document.body.clientWidth * 0.95 * 0.95;
    }
  },
  beforeDestroy() {
    axios({
      method: "PUT",
      url: "http://192.168.3.153:3000/voice/1",
      data: {
        ring: this.ring,
        shake: this.shake,
        mute: this.mute,
        phonepercent: this.phonepercent,
        clockpercent: this.clockpercent
      }
    }).then(res => {
      console.log("数据更新成功");
    });
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://192.168.3.153:3000/voice/1"
    }).then((res) => {
      this.ring = res.data.ring
      this.shake = res.data.shake
      this.mute = res.data.mute
      this.phonepercent = res.data.phonepercent
      this.clockpercent = res.data.clockpercent
      let inputslder = document.getElementById("inputslder");
      //console.log(this.sliderwrapwidth)
      inputslder.style.width = Math.floor(this.sliderwrapwidth)*this.phonepercent + "px";
      //console.log(inputslder.style.width)
      let inputsldernoc = document.getElementById("inputsldernoc");
      //console.log(inputsldernoc.style.width)
      inputsldernoc.style.width = Math.floor(this.sliderwrapwidth)*this.clockpercent + "px"
    })
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("soundandvibrationpagemessage", false);
    },
    changevoicemodering() {
      this.ring = true;
      this.shake = false;
      this.mute = false;
    },
    changevoicemodeshake() {
      this.ring = false;
      this.shake = true;
      this.mute = false;
    },
    changevoicemodemute() {
      this.ring = false;
      this.shake = false;
      this.mute = true;
    },
    checkpos(e) {
      if (
        e.changedTouches[0].clientX > this.bodyleftlimit &&
        e.changedTouches[0].clientX < this.bodyrightlimit
      ) {
        return true;
      } else {
        return false;
      }
    },
    bodysetpercent: function(input, totel) {
      return Number(input / totel);
    },
    nodechocice(e) {
      console.log(e)
      var inputslder = document.getElementById("inputslder");
      if (this.checkpos(e)) {
        inputslder.style.width = e.changedTouches[0].clientX + "px";
      }
    },
    nodemove(e) {
      var inputslder = document.getElementById("inputslder");
      if (this.checkpos(e)) {
        inputslder.style.width = e.changedTouches[0].clientX + "px";
      }
    },
    nodeblur(e) {
      this.phonepercent = this.bodysetpercent(
        Math.floor(e.changedTouches[0].clientX),
        Math.floor(this.sliderwrapwidth)
      );
      if (this.phonepercent > 1) {
        this.phonepercent = 1;
      } else if (this.phonepercent < 0) {
        this.phonepercent = 0;
      }
      //console.log(this.phonepercent);
    },
    nocnodechocice(e) {
      let inputsldernoc = document.getElementById("inputsldernoc");
      if (this.checkpos(e)) {
        inputsldernoc.style.width = e.changedTouches[0].clientX + "px";
      }
    },
    nocnodemove(e) {
      console.log(e)
      var inputsldernoc = document.getElementById("inputsldernoc");
      if (this.checkpos(e)) {
        inputsldernoc.style.width = e.changedTouches[0].clientX + "px";
      }
    },
    nocnodeblur(e) {
      this.clockpercent = this.bodysetpercent(
        Math.floor(e.changedTouches[0].clientX),
        Math.floor(this.sliderwrapwidth)
      );
      if (this.clockpercent > 1) {
        this.clockpercent = 1;
      } else if (this.clockpercent < 0) {
        this.clockpercent = 0;
      }
      //console.log(this.clockpercent);
    }
  }
};
</script>

<style>
#voicemodecontent {
  position: relative;
}
#voicemodechecklist {
  width: 95%;
  height: 20vh;
  background: white;
  margin: 0 auto;
  display: flex;
  border-radius: 2vh;
  justify-content: space-around;
  align-items: center;
}
.dividing {
  height: 18vh;
  width: 0.3vw;
  background-color: rgb(235, 235, 235);
}
#voicemodecontent li {
  height: 19vh;
  width: 31%;
  border-radius: 2vh;
}
.voiceicon {
  font-size: 4vh;
  color: rgb(110, 110, 110);
  margin-top: 2vh;
}
.voicetext {
  display: block;
  font-size: 2.2vh;
  font-weight: 500;
  color: rgb(60, 60, 60);
  margin-top: 2vh;
}
.active {
  width: 3vh;
  height: 3vh;
  background-color: rgb(10, 88, 246);
  border-radius: 50%;
  margin: 2vh auto;
  line-height: 2.7vh;
  position: relative;
  border: none !important;
}
.active span {
  display: block;
  height: 1.6vh;
  width: 1.6vh;
  background-color: white;
  margin: 0 auto;
  position: absolute;
  top: 0.7vh;
  left: 0.7vh;
  border-radius: 50%;
}
.notchoice {
  width: 3vh;
  height: 3vh;
  border-radius: 50%;
  border: 1px solid rgb(184, 184, 184);
  margin: 2vh auto;
  position: relative;
  box-sizing: content-box;
}
.acticon {
  color: rgb(57, 115, 229);
}
#volumecontent {
  width: 95%;
  height: 30vh;
  background-color: #fff;
  margin: 2vh auto;
  border-radius: 2vh;
}
#ringmesapl {
  text-align: left;
  font-size: 2.4vh;
  padding-top: 3vh;
  padding-left: 3vw;
  color: rgb(124, 124, 124);
}
.sliderinput {
  width: 95%;
  height: 3vh;
  border-radius: 1.5vh;
  background-color: rgb(230, 230, 230);
  position: relative;
  margin: 2vh 0;
}
.inputslder {
  height: 100%;
  width: 30%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(10, 88, 246);
  border-radius: 1.5vh;
}
.drapnode {
  height: 1.6vh;
  width: 1.6vh;
  position: absolute;
  border-radius: 0.8vh;
  background-color: white;
  top: 0.7vh;
  right: 0.7vh;
}
</style>

