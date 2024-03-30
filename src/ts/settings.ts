// import { ConfigData } from "./ConfigData";
// import { SettingManager } from "./SettingManager";
// import { MODULE_NAME } from "./globals";

// export enum SettingKeys {
//   UserToken = "userToken",
//   DebugEnabled = "debugEnabled"
// }

// export default function registerSettings() {
//   SettingManager.Instance.register(MODULE_NAME, SettingKeys.UserToken, {
//     name: "HeroLab Online User Token",
//     hint: "Please enter your HeroLab Online User token.  This token allows the plugin to access the HeroLab Online site.",
//     scope: "world",
//     config: true,
//     type: String,
//     default: "",
//     onChange: (value) => (ConfigData.Instance.userToken = value.toString())
//   });
//   SettingManager.Instance.register(MODULE_NAME, SettingKeys.DebugEnabled, {
//     name: "Debug Mode",
//     hint: "Sends additional debugging information to the console.",
//     scope: "world",
//     config: true,
//     type: Boolean,
//     default: false,
//     onChange: (value) => (ConfigData.Instance.debugEnabled = value.valueOf())
//   });
// }

