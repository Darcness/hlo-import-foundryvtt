export default function registerSettings() {
    game.settings.register("hlo-import-foundryvtt", "FirstSetting", {
        name: "hlo-import-foundryvtt.FirstSetting.Text",
        scope: "client",
        config: true,
        type: String,
        default: "",
    });
}
