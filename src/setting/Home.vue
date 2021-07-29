<template>
  <div>
    <div id="home">
      <div id="title">
        <span>设置</span>
      </div>
      <div id="search">
        <a-input placeholder="搜索设置项" style="height: 6vh;border-radius:3vh"></a-input>
      </div>
      <div id="user" @click="openNotification">
        <li id="avatar">
          <a-avatar size="large" icon="user" id="sculpture" />
        </li>
        <li id="discription">
          <span>{{username}}</span>
        </li>
        <li id="logo">
          <a-icon type="right" />
        </li>
      </div>
      <div id="InternetConnection" class="subbar">
        <ul>
          <li @click="jumptoWlanPage">
            <a-icon type="wifi" class="font-icon" style="color:skyblue" />
            <span>
              WLAN
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoBluetoothPage">
            <a-icon type="fork" class="font-icon" style="color:rgb(7, 251, 225)" />
            <span>
              蓝牙
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoMobileNet">
            <a-icon type="api" class="font-icon" style="color:rgb(127, 255, 2)" />
            <span>
              移动网络
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoSuperVpn">
            <a-icon type="link" class="font-icon" style="color:rgb(237, 70, 162)" />
            <span>
              超级终端
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoMoreConnections">
            <a-icon type="paper-clip" class="font-icon" style="color:rgb(254, 126, 0)" />
            <span>
              更多连接
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
        </ul>
      </div>
      <div id="showsetting" class="subbar">
        <ul>
          <li @click="jumptoDesktopAndWallpaper">
            <a-icon type="picture" class="font-icon" style="color:rgb(66, 220, 64)" />
            <span>
              桌面和壁纸
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoDisplayAndBrightness">
            <a-icon type="eye" class="font-icon" style="color:rgb(76, 228, 217)" />
            <span>
              显示和亮度
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
        </ul>
      </div>
      <div id="voiceseting" class="subbar">
        <ul>
          <li @click="jumptoSoundAndVibration">
            <a-icon type="sound" class="font-icon" style="color:rgb(75, 0, 255)" />
            <span>
              声音和振动
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoNotice">
            <a-icon type="notification" class="font-icon" style="color:rgb(254, 126, 0)" />
            <span>
              通知
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
        </ul>
      </div>
      <div id="safesetting" class="subbar">
        <ul>
          <li @click="jumptoBiometricCode">
            <a-icon type="key" class="font-icon" style="color:rgb(6, 255, 245)" />
            <span>
              生物识别和密码
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoApplicationShow">
            <a-icon type="appstore" class="font-icon" style="color:rgb(254, 126, 0)" />
            <span>
              应用
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoBattery">
            <a-icon type="box-plot" class="font-icon" style="color:rgb(113, 229, 112)" />
            <span>
              电池
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoStorage">
            <a-icon type="unordered-list" class="font-icon" style="color:rgb(0, 122, 204)" />
            <span>
              存储
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoSecurity">
            <a-icon type="insurance" class="font-icon" style="color:rgb(95, 194, 189)" />
            <span>
              安全
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoPrivacy">
            <a-icon type="security-scan" class="font-icon" style="color:rgb(95, 194, 189)" />
            <span>
              隐私
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
        </ul>
      </div>
      <div id="AIsetting" class="subbar">
        <ul>
          <li @click="jumptoHealthyUse">
            <a-icon type="heart" class="font-icon" style="color:rgb(13, 188, 121)" />
            <span>
              健康使用手机
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoIntelligentAssistant">
            <a-icon type="aliwangwang" class="font-icon" style="color:rgb(13, 188, 121)" />
            <span>
              智慧助手
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoAuxiliaryFunction">
            <a-icon type="pushpin" class="font-icon" style="color:rgb(254, 126, 0)" />
            <span>
              辅助功能
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
        </ul>
      </div>
      <div id="helpsetting" class="subbar">
        <ul>
          <li @click="jumptoUsersAndAccounts">
            <a-icon type="user" class="font-icon" style="color:rgb(20, 66, 116)" />
            <span>
              用户和账户
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoHMS">
            <a-icon type="global" class="font-icon" style="color:rgb(73, 137, 244)" />
            <span>
              HMS Core
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoSystemsAndUpdates">
            <a-icon type="setting" class="font-icon" style="color:skyblue" />
            <span>
              系统和更新
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
          <li @click="jumptoAboutMobile">
            <a-icon type="compass" class="font-icon" style="color:rgb(44, 62, 80)" />
            <span>
              关于手机
              <a-icon type="right" class="detialpage" />
            </span>
          </li>
        </ul>
      </div>
    </div>     
  <Wlan v-if="Wlanshow" v-on:wlanpagemessage="messagefromWlan"></Wlan>
  <BlueTooth v-if="BlueToothshow" v-on:bluetoothpagemessage="messagefromBluetooth" ></BlueTooth>
  <MobileNet v-if="MobileNetShow" v-on:mobilenetpagemessage="messagefromMobileNet"></MobileNet>
  <SuperVpn v-if="SuperVpnShow" v-on:supervpnpagemessage="messagefromSuperVpn"></SuperVpn>
  <MoreConnections v-if="MoreConnectionsShow" v-on:moreconnectionspagemessage="messagefromMoreConnections"></MoreConnections>
  <DesktopAndWallpaper v-if="DesktopAndWallpaperShow" v-on:desktopandwallpaperpagemessage="messagefromDesktopAndWallpaper"></DesktopAndWallpaper>
  <DisplayAndBrightness v-if="DisplayAndBrightnessShow" v-on:displayandbrightnesspagemessage="messagefromDisplayAndBrightness"></DisplayAndBrightness>
  <SoundAndVibration v-if="SoundAndVibrationShow" v-on:soundandvibrationpagemessage="messagefromSoundAndVibration"></SoundAndVibration>
  <Notice v-if="NoticeShow" v-on:noticepagemessage="messagefromNotice"></Notice>
  <BiometricCode v-if="BiometricCodeShow" v-on:biometriccodepagemessage="messagefromBiometricCode"></BiometricCode>
  <Application v-if="ApplicationShow" v-on:applicationpagemessage="messagefromApplication"></Application>
  <Battery v-if="BatteryShow" v-on:batterypagemessage="messagefromBattery"></Battery>
  <Storage v-if="StorageShow" v-on:storagepagemessage="messagefromStorage"></Storage>
  <Security v-if="SecurityShow" v-on:securitypagemessage="messagefromSecurity"></Security>
  <Privacy v-if="PrivacyShow" v-on:privacypagemessage="messagefromPrivacy"></Privacy>
  <HealthyUse v-if="HealthyUseShow" v-on:healthyusepagemessage="messagefromHealthyUse"></HealthyUse>
  <IntelligentAssistant v-if="IntelligentAssistantShow" v-on:intelligentassistantpagemessage="messagefromIntelligentAssistant"></IntelligentAssistant>
  <AuxiliaryFunction v-if="AuxiliaryFunctionShow" v-on:auxiliaryfunctionpagemessage="messagefromAuxiliaryFunction"></AuxiliaryFunction>
  <UsersAndAccounts v-if="UsersAndAccountsShow" v-on:usersandaccountspagemessage="messagefromUsersAndAccounts"></UsersAndAccounts>
  <HMS v-if="HMSShow" v-on:hmspagemessage="messagefromHMS"></HMS>
  <SystemsAndUpdates v-if="SystemsAndUpdatesShow" v-on:systemsandupdates="messagefromSystemsAndUpdates"></SystemsAndUpdates>
  <AboutMobile v-if="AboutMobileShow" v-on:aboutmobilepagemessage="messagefromAboutMobile"></AboutMobile>


  </div>
</template>

<script>
import Wlan from "./network/Wlan.vue"
import BlueTooth from "./network/BlueTooth.vue"
import MobileNet from "./network/MobileNet.vue"
import SuperVpn from "./network/SuperVpn.vue"
import MoreConnections from "./network/MoreConnections.vue"
import DesktopAndWallpaper from "./desktop/DesktopAndWallpaper.vue"
import DisplayAndBrightness from "./desktop/DisplayAndBrightness.vue"
import SoundAndVibration from "./voice/SoundAndVibration.vue"
import Notice from "./voice/Notice.vue"
import BiometricCode from "./sucurity/BiometricCode.vue"
import Application from "./sucurity/Application.vue"
import Battery from "./sucurity/Battery.vue"
import Storage from "./sucurity/Storage.vue"
import Security from "./sucurity/Security.vue"
import Privacy from "./sucurity/Privacy.vue"
import HealthyUse from "./healthy/HealthyUse.vue"
import IntelligentAssistant from "./healthy/IntelligentAssistant.vue"
import AuxiliaryFunction from "./healthy/AuxiliaryFunction.vue"
import UsersAndAccounts from "./users/UsersAndAccounts.vue"
import HMS from "./users/HMS.vue"
import SystemsAndUpdates from "./users/SystemsAndUpdates.vue"
import AboutMobile from "./users/AboutMobile.vue"
export default {
  name: "Home",
  data() {
    return {
      username: "Geeker",
      basicshow: true,
      Wlanshow: false,
      BlueToothshow: false,
      MobileNetShow: false,
      SuperVpnShow: false,
      MoreConnectionsShow: false,
      DesktopAndWallpaperShow: false,
      DisplayAndBrightnessShow: false,
      SoundAndVibrationShow: false,
      NoticeShow: false,
      BiometricCodeShow: false,
      ApplicationShow: false,
      BatteryShow: false,
      StorageShow: false,
      SecurityShow: false,
      PrivacyShow: false,
      HealthyUseShow: false,
      IntelligentAssistantShow: false,
      AuxiliaryFunctionShow: false,
      UsersAndAccountsShow: false,
      HMSShow: false,
      SystemsAndUpdatesShow: false,
      AboutMobileShow: false
    };
  },
  components: {
    Wlan,
    BlueTooth,
    MobileNet,
    SuperVpn,
    MoreConnections,
    DesktopAndWallpaper,
    DisplayAndBrightness,
    SoundAndVibration,
    Notice,
    BiometricCode,
    Application,
    Battery,
    Storage,
    Security,
    Privacy,
    HealthyUse,
    IntelligentAssistant,
    AuxiliaryFunction,
    UsersAndAccounts,
    HMS,
    SystemsAndUpdates,
    AboutMobile
  },
  methods: {
    openNotification() {
      this.$notification.open({
        message: "sorry to borther",
        description:
          "设备暂不支持用户切换，请直接退出登录，并切换账户",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    },
    jumptoWlanPage() {
      this.Wlanshow = true;
    },
    messagefromWlan(data) {
      this.Wlanshow = data;
    },
    jumptoBluetoothPage() {
      this.BlueToothshow = true
    },
    messagefromBluetooth(data) {
      this.BlueToothshow = data
    },
    jumptoMobileNet() {
      this.MobileNetShow = true
    },
    messagefromMobileNet(data) {
      this.MobileNetShow = data
    },
    jumptoSuperVpn() {
      this.SuperVpnShow = true
    },
    messagefromSuperVpn(data) {
      this.SuperVpnShow = data
    },
    jumptoMoreConnections() {
      this.MoreConnectionsShow = true
    },
    messagefromMoreConnections(data) {
      this.MoreConnectionsShow = data
    },
    jumptoDesktopAndWallpaper() {
      this.DesktopAndWallpaperShow = true
    },
    messagefromDesktopAndWallpaper(data) {
      this.DesktopAndWallpaperShow = data
    },
    jumptoDisplayAndBrightness() {
      this.DisplayAndBrightnessShow = true
    },
    messagefromDisplayAndBrightness(data) {
      this.DisplayAndBrightnessShow = data
    },
    jumptoSoundAndVibration() {
      this.SoundAndVibrationShow = true
    },
    messagefromSoundAndVibration(data) {
      this.SoundAndVibrationShow = data
    },
    jumptoNotice() {
      this.NoticeShow = true
    },
    messagefromNotice(data) {
      this.NoticeShow = data
    },
    jumptoBiometricCode() {
      this.BiometricCodeShow = true
    },
    messagefromBiometricCode(data) {
      this.BiometricCodeShow = data
    },
    jumptoApplicationShow() {
      this.ApplicationShow = true
    },
    messagefromApplication(data) {
      this.ApplicationShow = data
    },
    jumptoBattery() {
      this.BatteryShow = true
    },
    messagefromBattery(data) {
      this.BatteryShow = data
    },
    jumptoStorage() {
      this.StorageShow = true
    },
    messagefromStorage(data) {
      this.StorageShow = data
    },
    jumptoSecurity() {
      this.SecurityShow = true
    },
    messagefromSecurity(data) {
      this.SecurityShow = data
    }, 
    jumptoPrivacy() {
      this.PrivacyShow = true
    },
    messagefromPrivacy(data) {
      this.PrivacyShow = data
    },
    jumptoHealthyUse() {
      this.HealthyUseShow = true
    },
    messagefromHealthyUse(data) {
      this.HealthyUseShow = data
    },
    jumptoIntelligentAssistant () {
      this.IntelligentAssistantShow =true
    },
    messagefromIntelligentAssistant(data) {
      this.IntelligentAssistantShow =false
    },
    jumptoAuxiliaryFunction() {
      this.AuxiliaryFunctionShow = true
    },
    messagefromAuxiliaryFunction(data) {
      this.AuxiliaryFunctionShow = data
    },
    jumptoUsersAndAccounts() {
      this.UsersAndAccountsShow = true
    },
    messagefromUsersAndAccounts(data) {
      this.UsersAndAccountsShow = data
    },
    jumptoHMS() {
      this.HMSShow = true
    },
    messagefromHMS(data) {
      this.HMSShow = data
    },
    jumptoSystemsAndUpdates() {
      this.SystemsAndUpdatesShow = true
    },
    messagefromSystemsAndUpdates(data) {
      this.SystemsAndUpdatesShow = data
    },
    jumptoAboutMobile() {
      this.AboutMobileShow = true
    },
    messagefromAboutMobile(data) {
      this.AboutMobileShow = data
    }

    
    

  }
};
</script>

<style>

#home {
  background-color: rgb(238, 238, 238);
  width: 100%;
  position: relative;
  max-height: 100vh;
  overflow: scroll;
  height: 224vh;
}
#title {
  height: 15vh;
  font-size: 4vh;
}
#title span {
  position: absolute;
  left: 4vw;
  top: 8vh;
}
#search {
  height: 8vh;
  width: 95%;
  margin: auto;
  line-height: 8vh;
}
#user {
  height: 10vh;
  width: 95%;
  background-color: white;
  border-radius: 2vh;
  margin: 1vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#avatar {
  flex: 1;
}
#discription {
  flex: 2;
}
#logo {
  flex: 1;
}
.subbar {
  border-radius: 3vh;
  overflow: hidden;
  width: 95%;
  margin: 2vh auto;
  background-color: white;
}
.subbar li {
  height: 8vh;
  line-height: 8vh;
  font-size: 2.2vh;
  width: 100%;
}
.subbar li span {
  box-sizing: content-box;
  width: 80%;
  border-bottom: 1px solid rgb(217, 217, 217);
  float: right;
  margin-right: 4vw;
  font-weight: 500;
  font-family: STHeiti;
  text-align: left;
}
.subbar li span .detialpage {
  font-size: 2vh;
  font-weight: 200;
  float: right;
  padding-top: 3vh;
  padding-right: 0vw;
}
#InternetConnection {
  height: 40vh;
}
.font-icon {
  font-size: 3.5vh;
  color: white;
  float: left;
  padding-left: 2vh;
  padding-top: 2.2vh;
}
#showsetting {
  height: 15.9vh;
}
#voiceseting {
  height: 15.9vh;
}
#safesetting {
  height: 48vh;
}
#AIsetting {
  height: 24vh;
}
#helpsetting {
  height: 32vh;
}
</style>




