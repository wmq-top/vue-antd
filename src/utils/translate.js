const $t = function (type, inputstring) {
    if (type === "English") {
        switch (inputstring) {
            case "蓝牙":
                return "bluetooth"
            case "移动网络":
                return "Mobile network"
            case "超级终端":
                return "Super Device"
            case "更多连接":
                return "More connnection"
            case "桌面和壁纸":
                return "Home screen&wallpaper"
            case "显示和亮度":
                return "Display & brightness"
            case "声音和振动":
                return "sounds & vibration"
            case "通知":
                return "Notifications"
            case "生物识别和密码":
                return "Biometrics & password"
            case "应用":
                return "Apps"
            case "电池":
                return "Battery"
            case "存储":
                return "Storage"
            case "安全":
                return "Security"
            case "隐私":
                return "Privacy"
            case "健康使用手机":
                return "Digital Balance"
            case "智慧助手":
                return "HUAWEI Assistant"
            case "辅助功能":
                return "Accessibility features"
            case "用户和账户":
                return "Users & accounts"
            case "HMS Core":
                return "HMS core"
            case "系统和更新":
                return "System & updates"
            case "关于手机":
                return "About Phone"
            default:
                break;
        }
    }
    if (type === "simplechinese") {
        return inputstring
    }
}

export default $t