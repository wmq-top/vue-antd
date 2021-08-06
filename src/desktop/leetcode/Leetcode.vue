<template>
  <div id="leetcode">
    <div id="canvascontent">
      <canvas width="350" height="300" style="margin:auto" id="donepercent"></canvas>
    </div>
    <div id="daychoice">{{characters[1]}}</div>
    <ul id="structure">
      <li v-for="(item,index) in serverdata" :key="index">
        <span
          class="iconcontent"
          :class="{active: isactive==index}"
          @touchstart="activechange(index)"
        >
          <a-icon :type="item.icontype" />
        </span>
        {{item.type}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Leetcode",
  data() {
    return {
      iconlist: [
        "filter",
        "filter",
        "filter",
        "filter",
        "filter",
        "filter",
        "filter",
        "filter"
      ],
      typelist: ["数组", "栈", "队列", "链表", "树", "图", "散列表", "堆"],
      isactive: 0,
      characters: ["专项练习", "每日一题"],
      corlist: [
        "rgba(182, 253, 1, 0.5)",
        "rgba(255, 120, 1, 0.5)",
        "rgba(255, 1, 106, 0.5)",
        "rgba(74, 0, 254, 0.5)",
        "rgba(2, 75, 255, 0.5)",
        "rgba(1, 255, 230, 0.5)",
        "rgba(0, 254, 62, 0.5)",
        "rgba(35, 255, 0, 0.5)"
      ],
      serverdata: []
    };
  },
  created() {
    axios({
      method: "GET",
      url: "http://192.168.3.153:3000/leetcode"
    })
      .then(res => {
        this.serverdata = res.data;
        console.log(this.serverdata)
      })
  },
  methods: {
    activechange(index) {
      this.isactive = index;
      var load = 0;
      let donepic = document.getElementById("donepercent");
      let ctx = donepic.getContext("2d");
      //设置结束角度
      let end = -90;
      let usingnumber = 0;
      ctx.clearRect(0, 0, 350, 300);
      ctx.beginPath();
      ctx.strokeStyle = "rgb(193, 193, 193)";
      ctx.lineWidth = 16;
      ctx.arc(175, 150, 100, 0, 2 * Math.PI);
      ctx.stroke();
      var timer = setInterval(() => {
        end += 3.6;
        ctx.beginPath();
        ctx.strokeStyle = this.corlist[index];
        ctx.lineWidth = 16;
        ctx.arc(175, 150, 100, (-90 * Math.PI) / 180, (end * Math.PI) / 180);
        ctx.stroke();
        ctx.font = "small-caps lighter 20px arial"
        load++;
        ctx.fillText('已完成:' + this.serverdata[index].fixbnumber + "/" + this.serverdata[index].fullnumber, 122,170)
        if (load == Math.floor(this.serverdata[index].fixbnumber/this.serverdata[index].fullnumber * 100)) {
          clearInterval(timer);
        }
      }, 10);
    }
  }
};
</script>

<style>
#leetcode {
  height: 100vh;
  width: 100vw;
  background-color: rgb(238, 238, 238);
  padding-top: 1vh;
  overflow: hidden;
}
#canvascontent {
  max-width: 350px;
  max-height: 300px;
  /* background-color: #fff; */
  margin: 0vh auto 3vh;
  border-radius: 2vh;
}
#daychoice {
  width: 50vw;
  height: 6vh;
  background-color: rgb(10, 88, 246);
  border-radius: 3vh;
  margin: 0 auto;
  line-height: 6vh;
  font-size: 3vh;
  color: white;
  margin-bottom: 2vh;
}
#structure {
  width: 95vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  background-color: rgba(225, 231, 228, 0.63);
  border-radius: 3vh;
}
#structure li {
  width: 25%;
}
#structure .iconcontent {
  display: block;
  height: 8vh;
  width: 8vh;
  font-size: 30p;
  margin: 3vh auto 0;
  line-height: 9vh;
  font-size: 4vh;
  border-radius: 50%;
  background-color: white;
  color: rgb(204, 204, 204);
}
#structure .active {
  background-color: rgb(10, 88, 246);
  color: white;
}
</style>
