<template>
  <div id="caculate">
    <div id="inputshow">{{inputstr}}</div>
    <div id="resultshow"></div>
    <div id="caculatekeybordsimple">
      <ul>
        <li @touchstart="mcclick">
          <span>MC</span>
        </li>
        <li @touchstart="clearinput">
          <span class="compute">C</span>
        </li>
        <li @touchstart="add7">
          <span>7</span>
        </li>
        <li @touchstart="add4">
          <span>4</span>
        </li>
        <li @touchstart="add1">
          <span>1</span>
        </li>
        <li @touchstart="addpercent">
          <span>%</span>
        </li>
        <li @touchstart="memoryadd">
          <span>M+</span>
        </li>
        <li @touchstart="addchu">
          <span class="compute">/</span>
        </li>
        <li @touchstart="add8">
          <span>8</span>
        </li>
        <li @touchstart="add5">
          <span>5</span>
        </li>
        <li @touchstart="add2">
          <span>2</span>
        </li>
        <li @touchstart="add0">
          <span>0</span>
        </li>
        <li @touchstart="memsub">
          <span>M-</span>
        </li>
        <li @touchstart="addcheng">
          <span class="compute">x</span>
        </li>
        <li @touchstart="add9">
          <span>9</span>
        </li>
        <li @touchstart="add6">
          <span>6</span>
        </li>
        <li @touchstart="add3">
          <span>3</span>
        </li>
        <li @touchstart="addpot">
          <span>.</span>
        </li>
        <li @touchstart="changeinput">
          <span>MR</span>
        </li>
        <li @touchstart="back">
          <span class="compute">
            <a-icon type="backward" />
          </span>
        </li>
        <li @touchstart="addsub">
          <span class="compute">-</span>
        </li>
        <li @touchstart="addadd">
          <span class="compute">+</span>
        </li>
        <li id="result" @touchstart="resultshow">=</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "caculate",
  data() {
    return {
      numberqueue: [],
      simblequeue: [],
      inputqueue: [],
      inputstr: "",
      mrqueue: 0,
      result: "",
      memresult: 0,
      simbleinputenable: true,
      currentsimble: ""
    };
  },
  computed: {
    datacheck() {
      return (
        typeof (this.inputstr[this.inputstr.length - 1] * 1) == "number" &&
        this.numberqueue[this.numberqueue.length - 1] &&
        String(this.inputstr[this.inputstr.length - 1] * 1) != "NaN"
      );
    }
  },
  methods: {
    mcclick() {
      this.mrqueue = 0;
      this.memresult = 0;
    },
    clearinput() {
      this.inputstr = "";
      this.result = "";
      this.numberqueue = [];
      this.simblequeue = [];
      this.inputqueue = [];
    },
    addnumber(number) {
      if (this.datacheck) {
        this.numberqueue[this.numberqueue.length - 1] = Number(
          this.numberqueue[this.numberqueue.length - 1].toString() + number
        );
      } else if (
        this.numberqueue[this.numberqueue.length - 1] == 0 &&
        this.inputstr[this.inputstr.length - 1] != "."
      ) {
        this.inputstr = this.inputstr.substring(0, this.inputstr.length - 1);
        this.numberqueue.pop();
        this.numberqueue.push(number);
      } else if (this.inputstr[this.inputstr.length - 1] == ".") {
        this.numberqueue[this.numberqueue.length - 1] = Number(
          String(this.numberqueue[this.numberqueue.length - 1]) + "." + number
        );
      } else {
        this.numberqueue.push(number);
      }
      this.inputstr += String(number);
      console.log(this.numberqueue);
    },
    addsimble(simble) {
      if(this.inputstr.length == 0) {
        return;
      }
      if (this.inputstr[this.inputstr.length - 1] == simble) {
        return;
      } else if (
        String(this.inputstr[this.inputstr.length - 1] * 1) == "NaN" &&
        this.inputstr[this.inputstr.length - 1] != "."
      ) {
        this.inputstr =
          this.inputstr.substring(0, this.inputstr.length - 1) + simble;
        this.simblequeue[this.simblequeue.length - 1] = simble;
      } else {
        this.inputstr += simble;
        this.simblequeue.push(simble);
      }
    },
    add0() {
      if (this.numberqueue.length == 0) {
        this.numberqueue.push(0);
        this.inputstr += "0";
      } else if (this.numberqueue[this.numberqueue.length - 1] === 0) {
        if(this.inputstr[this.inputstr.length-1] != '.') {
          return 
        } else {
          this.numberqueue[this.numberqueue.length - 1] = Number(
          this.numberqueue[this.numberqueue.length - 1].toString() + "0"
        );
        this.inputstr += "0";
        }
      } else if (this.datacheck) {
        this.numberqueue[this.numberqueue.length - 1] = Number(
          this.numberqueue[this.numberqueue.length - 1].toString() + "0"
        );
        this.inputstr += "0";
      } else if (String(this.inputstr[this.inputstr.length - 1] * 1) == "NaN") {
        this.numberqueue.push(0);
        this.inputstr += "0";
      }
      console.log(this.numberqueue)
    },
    add1() {
      this.addnumber(1);
    },
    add2() {
      this.addnumber(2);
    },
    add3() {
      this.addnumber(3);
    },
    add4() {
      this.addnumber(4);
    },
    add5() {
      this.addnumber(5);
    },
    add6() {
      this.addnumber(6);
    },
    add7() {
      this.addnumber(7);
    },
    add8() {
      this.addnumber(8);
    },
    add9() {
      this.addnumber(9);
    },
    addadd() {
      this.addsimble("+");
      console.log(this.simblequeue);
    },
    addpercent() {
      this.inputstr += "%";
      console.log(this.simblequeue);
    },
    addpot() {
      if (
        (typeof (this.inputstr[this.inputstr.length - 1] * 1) === "number" ||
          this.inputstr[this.inputstr.length - 1] === "0") &&
        this.inputstr.length != 0 &&
        String(this.inputstr[this.inputstr.length - 1] * 1) != "NaN"
      ) {
        console.log(11122);
        this.inputstr += ".";
      } else if (this.inputstr.length == 0) {
        this.inputstr = "0.";
        this.numberqueue.push(0);
      } else if (String(this.inputstr[this.inputstr.length - 1] * 1) == "NaN") {
        console.log(111);
        this.numberqueue.push(0);
        this.inputstr += "0.";
      }
      console.log(this.numberqueue);
    },
    addsub() {
      this.addsimble("-");
      console.log(this.simblequeue);
    },
    memoryadd() {
      this.memresult += Number(this.result);
    },
    addchu() {
      this.addsimble("/");
      console.log(this.simblequeue);
    },
    memsub() {
      this.memresult -= Number(this.result);
    },
    addcheng() {
      this.addsimble("*");
      console.log(this.simblequeue);
    },
    changeinput() {
      this.inputstr = this.memresult;
    },
    back() {
      if(this.inputstr.length == 0) {
        return 
      }
      if (
        this.inputstr[this.inputstr.length - 1] == "+" ||
        this.inputstr[this.inputstr.length - 1] == "/" ||
        this.inputstr[this.inputstr.length - 1] == "-" ||
        this.inputstr[this.inputstr.length - 1] == "*"
      ) {
        this.simblequeue.pop()
        this.inputstr = this.inputstr.slice(0, this.inputstr.length - 1);
      } else if(Number(this.inputstr[this.inputstr.length - 1]) == 1 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 2 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 3 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 4 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 5 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 6 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 7 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 8 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 9 ||
      Number(this.inputstr[this.inputstr.length - 1]) == 0 
      ) {
        if(this.inputstr[this.inputstr.length - 2] == '.') {
          this.numberqueue[this.numberqueue.length-1] = Number(String(this.numberqueue[this.numberqueue.length-1]).substring(0,String(this.numberqueue[this.numberqueue.length-1]).length-2))
          if(this.numberqueue[this.numberqueue.length-1] == 0) {
            this.numberqueue.pop()
          }
          this.inputstr = this.inputstr.slice(0, this.inputstr.length - 2);
        } else {
          this.numberqueue[this.numberqueue.length-1] = Number(String(this.numberqueue[this.numberqueue.length-1]).substring(0,String(this.numberqueue[this.numberqueue.length-1]).length-1))
          console.log(this.numberqueue[this.numberqueue.length-1])
          if(this.numberqueue[this.numberqueue.length-1] == 0 && this.numberqueue[this.numberqueue.length-1] !== 0) {
            this.numberqueue.pop()
          } else if(this.numberqueue[this.numberqueue.length-1] === 0) {
            this.inputstr = this.inputstr.slice(0, this.inputstr.length - 1);
            this.numberqueue.pop()
          }
          this.inputstr = this.inputstr.slice(0, this.inputstr.length - 1);
        }
      }
      console.log(this.numberqueue)
      console.log(this.simblequeue)
    },
    resultshow() {
      console.log("jisuanzhong")
      this.inputstr = this.supercaculate(this.numberqueue,this.simblequeue)
    },
    supercaculate(number, simble) {
    for (let i = 0; i < simble.length; i++) {
        if (simble[i] == "*") {
            number[i] = number[i] * number[i + 1]
            number.splice(i + 1, 1)
            simble.splice(i, 1)
            i--
        } else if (simble[i] == "/") {
            number[i] = number[i] / number[i + 1]
            number.splice(i + 1, 1)
            simble.splice(i, 1)
            i--
        }

    }
    let res = number[0]
    for (let i = 0; i < simble.length; i++) {
        if (simble[i] == "+") {
            res += number[i + 1]
        } else if (simble[i] == '-') {
            res -= number[i + 1]
        }
    }
    console.log(res)
    return res 
}
  },
  watch: {
    // inputstr(oldvalue, newvalue) {
    //   this.supercaculate();
    // }
  }
};
</script>

<style>
#caculatekeybordsimple {
  width: 100vw;
  height: 65vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(238, 238, 238);
  border-radius: 3vh;
}
#caculatekeybordsimple ul {
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  padding-top: 1vh;
}
#caculatekeybordsimple ul li {
  font-size: 4vh;
  width: 17vw;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-bottom: 1vh;
  height: 17vw;
  border-radius: 50%;
  background-color: white;
  line-height: 17vw;
}
#caculatekeybordsimple ul #result {
  width: 17vw;
  height: 36vw;
  border-radius: 8.5vw;
  background-color: rgb(10, 88, 246);
  line-height: 36vw;
  font-size: 6vh;
  color: white;
}
#inputshow {
  width: 100vw;
  height: 10vh;
  background-color: pink;
  position: relative;
  top: 9vh;
  font-size: 6vh;
  text-align: right;
  padding-right: 4vw;
  line-height: 10vh;
  overflow: scroll;
}
.number {
  color: black;
}
.compute {
  font-size: 5vh;
  color: rgb(10, 88, 246);
}
</style>



