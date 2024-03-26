import fs from "fs-extra";
import gulp from "gulp";
import file from "gulp-file";

import settings from "./settings";
const { name, version, description, buildPath } = settings;

import { task } from "./lib";


function getManifestPath() {
    const modulePath = "module.json";
    const systemPath = "system.json";

    if (fs.existsSync(modulePath)) {
        return modulePath;
    } else {
        return systemPath;
    }
}

function readManifest() {
    const manifestPath = getManifestPath();
    return fs.readJSONSync(manifestPath);
}

function getManifest() {
    const manifest: any = readManifest();
    manifest.id = manifest?.id ?? name;
    manifest.version = manifest?.version ?? version;
    manifest.description = manifest?.description ?? description;
    manifest.manifest = manifest?.manifest ?? `https://github.com/Darcness/hlo-import-foundryvtt/releases/download/v${version}/module.json`;
    manifest.download = manifest?.download ?? `https://github.com/Darcness/hlo-import-foundryvtt/releases/download/v${version}/${name}-v${version}.zip`;
    return manifest;
}


const defaultTask = task("manifest", () => {
    const manifest = getManifest();
    const content = JSON.stringify(manifest, null, 2);
    return file(getManifestPath(), content, { src: true })
        .pipe(gulp.dest(buildPath));
});

export { defaultTask as default };
