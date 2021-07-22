<template>
  <div>
      <ul id="topbar">
          <li id="backup"><slot name="back"></slot></li>
          <li id="pagename"><slot name="subbarname"></slot></li>
          <li id="question"><slot name="helpenable"></slot></li>
      </ul>      
  </div>
</template>

<script>
export default {
    name: "Topbar"
}
</script>

<style>
#topbar {
    height: 9vh;
}
#backup {
    float: left;
    font-size: 3.5vh;
    line-height: 9vh;
    padding-left: 6vw;    
}
#pagename {
    float: left;
    font-size: 3.5vh;
    line-height: 9vh;
    padding-left: 6vw;
}
#question {
    float: right;
    font-size: 3.5vh;
    line-height: 9vh;
    padding-right: 6vw;
}
</style>

