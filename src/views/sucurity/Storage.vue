<template>
  <div id="storage" class="FirstLvSub">
    <Topbar>
      <template slot="back">
        <a-icon type="arrow-left" @click="sendmessagetoparent" />
      </template>
      <template slot="subbarname">{{name}}</template>
    </Topbar>
    <div id="">
      <canvas id="circle" width="400" height="300"></canvas>
    </div>
    <div id="clean" @click="cleandevice">
      清理加速
    </div>
    <div id="userstoredata">
      <span>用户数据</span>
    </div>
    <div id="storageMessagelist">
      <ul>
        <li v-for="(item,i) in typestep" :key="i" class="storagelist" ><span :class="datacolorarr[i]" class="listnodespan"></span><span class="storetextnode">{{item.name}}<span class="storenodenumber">{{item.number}}GB</span></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Topbar from "../../components/Topbar.vue"
export default {
  name: "Storage",  
  data() {
    return {
      name: "存储",
      typestep: [],
      datacolorarr: ["red","orange","yellow","skyblue","green","blue","purple"]
    };
  },
  created() {
    axios({
      method: "GET",
      url: "http://localhost:3000/storage"
    })
      .then(res => {
        this.typestep = [...res.data];
        console.log(this.typestep);
      })
      .then(res => {
        var circle = document.getElementById("circle");
        var width = document.getElementById("storage").style.width;
        var ctx = circle.getContext("2d");
        //结束角度
        var end = -90;
        var usingnumber = 0;
        //每次加载前清除画布
        ctx.clearRect(0, 0, 400, 300);
        // 创建变量，进度值1%
        var colorarr = [          
          "rgb(242, 37, 28)",
          "rgb(254, 141, 37)",
          "rgb(212, 215, 18)",
          "rgb(77, 253, 27)",
          "rgb(51, 247, 129)",
          "rgb(44, 95, 245)",
          "rgb(75, 39, 200)",
          "black",
        ];
        //初始化背景框圆圈
        //开始画布笔迹
        ctx.beginPath();
        // 灰色底框
        ctx.strokeStyle = "rgb(230, 230, 230)"; //底框的背景颜色
        ctx.lineWidth = 20; //底框的宽度
        //底框显示的位置想x,y,r,start,end
        ctx.arc(200, 150, 120, 0, 2 * Math.PI);
        ctx.stroke(); //绘制底框，空心圆
        console.log(this.typestep[0].number);
        var maxstorage = this.typestep[7].number;
        for (var i = 0; i < colorarr.length-1; i++) {
          //开始笔迹
          ctx.beginPath();
          //修改角度计算，现有内存除以完整内存， 乘上角度
          var dig = (this.typestep[i].number / maxstorage) * 360;
          usingnumber += this.typestep[i].number;
          ctx.strokeStyle = colorarr[i];
          ctx.lineWidth = 20;
          ctx.arc(
            200,
            150,
            120,
            (end * Math.PI) / 180,
            ((end + dig) * Math.PI) / 180
          );
          end += dig;
          ctx.stroke();
        }
        // 修改结束角度
        // end += 36;
        // // 开始新的路径
        // ctx.beginPath();
        // // 绘制新的圆环
        // ctx.strokeStyle = "lightgreen";
        // ctx.lineWidth = 20;
        // //从顶点位置开始
        // ctx.arc(200, 200, 120, (-90 * Math.PI) / 180, (end * Math.PI) / 180);
        // ctx.stroke();
        // // 设置中间的文字字体和大小
        ctx.font = "50px SimHei";
        ctx.fillText(Math.floor((usingnumber / maxstorage) * 100), 170, 150);
        ctx.font = "22px SimHei";
        ctx.fillText("%", 225, 150);
        // // 设置图形文字
        ctx.font = "18px SimHei";
        ctx.fillText(
          "已使用" + usingnumber + "GB/" + maxstorage + "GB",
          115,
          190
        );
      });
  },
  components: {
    Topbar
  },
  methods: {
    sendmessagetoparent() {
      this.$emit("storagepagemessage", false);
    },
    cleandevice() {
      this.$notification.open({
        message: "sorry to borther",
        description:
          "设备不支持在客户端清理数据，请联系管理员删除数据",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  },
  mounted() {}
};
</script>

<style>
#storage {
  text-align: left;
  width: 100%;  
}
canvas {
  background-color: rgb(238, 238, 238);
  margin: 0 auto;
}
#clean {
  width: 50%;
  margin: 0 auto;
  height: 5vh;
  border-radius: 2.5vh;
  background-color: rgb(230, 230, 230);
  text-align: center;
  line-height: 5vh;
  font-size: 2.5vh;
  color: rgb(44, 95, 245);
}
#storageMessagelist {
  margin: 1vh auto;
  max-height: 49vh;
  width: 95%;
  background-color: white;
  border-radius: 3vh;
  overflow: hidden;
}
#userstoredata {
  margin-top: 3vh;
  padding-left: 6vw;
  height: 3vh;
  line-height: 3vh;
  font-size: 2vh;
}
.storagelist {
  height: 7vh;
  background-color: white;
  line-height: 7vh;  
  position: relative;
}
.listnodespan {
  height: 1.5vh;
  width: 1.5vh;
  display: block;
  position: absolute;
  top: 2.7vh;
  left: 2vw;
  border-radius: 0.75vh;
}
.red{
  background-color:rgb(242, 37, 28);  
}
.orange {
  background-color: rgb(254, 141, 37);
}
.yellow {
  background-color: rgb(212, 215, 18);
}
.skyblue {
  background-color: rgb(77, 253, 27);
}
.green {
  background-color:rgb(51, 247, 129);
}
.blue {
  background-color: rgb(44, 95, 245);
}
.purple {
  background-color: rgb(75, 39, 200);
}
.storetextnode {
  display: block;
  position: absolute;
  left: 6vw;
  width: 90%;
  border-bottom: 0.1vh solid rgb(241, 235, 235);
  line-height: 7vh;  
  height: 7vh;
  font-size: 2.5vh;
  text-align: left;
  padding-left: 2vw;
}
.storenodenumber {
  position: absolute;
  right: 2vw;
}
</style>

