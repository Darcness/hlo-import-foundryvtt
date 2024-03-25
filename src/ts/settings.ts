import { ConfigData } from "./ConfigData";
import { MODULE_NAME } from "./globals";

export enum SettingKeys {
    UserToken = "userToken",
    DebugEnabled = "debugEnabled"
}

export default function registerSettings() {
    game.settings.register(MODULE_NAME, SettingKeys.UserToken, {
        name: "HeroLab Online User Token",
        hint: "Please enter your HeroLab Online User token.  This token allows the plugin to access the HeroLab Online site.",
        scope: "world",
        config: true,
        type: String,
        default: "",
        onchange: value => (ConfigData.Instance.userToken = value)
    });
    game.settings.register(MODULE_NAME, SettingKeys.DebugEnabled, {
        name: "Debug Mode",
        hint: "Please enter your HeroLab Online User token.  This token allows the plugin to access the HeroLab Online site.",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onchange: value => (ConfigData.Instance.debugEnabled = value)
    });
}
