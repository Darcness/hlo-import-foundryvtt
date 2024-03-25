import { MODULE_NAME } from "./globals";
import { SettingKeys } from "./settings";

export class ConfigData {
    private static _instance: ConfigData;

    public userToken: string;
    public debugEnabled: boolean;

    private constructor() {
        this.userToken = game.settings.get(MODULE_NAME, SettingKeys.UserToken);
        this.debugEnabled = game.settings.get(MODULE_NAME, SettingKeys.DebugEnabled);
    }

    public static get Instance() { return this._instance ?? (this._instance = new this()); }
}