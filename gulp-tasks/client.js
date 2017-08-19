const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

const ROOT_DIR = "./";
const CLIENT_FILES = [
    "src/*.json", "src/**/*.json",
    "src/*.js", "src/**/*.js",
    "src/*.css", "src/**/*.css",
    "src/*.html", "src/**/*.html",
    "!src/aot-files/*", "!/aot-files/**/*",
    "!src/systemjs/*", "!src/systemjs/**/*",
    "!src/tsconfig.json"
];
const CLIENT_SRC_DIR = "src/";
const CLIENT_DEST_DIR = "dist/";
const CLIENT_TS_CONFIG = "./src/tsconfig.json";
const CLIENT_SOURCEMAP_ROOT = "../../src/"; // This is with resepect to CLIENT_DEST_DIR
const CLIENT_SYSTEM_FILES = ["./src/systemjs/systemjs-angular-loader.js", "./src/systemjs/systemjs.config.js"];
const CLIENT_TASKS = [
    "build_client",
    "move_client_data"
];

const clientTsProject = ts.createProject(CLIENT_TS_CONFIG);


gulp.task("move_client_data", ["clean_client"] , () => {
    gulp.src(CLIENT_SRC_DIR + "index.html")
        .pipe(gulp.dest(ROOT_DIR))
    return gulp.src(CLIENT_FILES)
        .pipe(gulp.dest(CLIENT_DEST_DIR));
});

gulp.task("move_client_systemjs", ["move_client_data"], () => {
    return gulp.src(CLIENT_SYSTEM_FILES)
        .pipe(gulp.dest(CLIENT_DEST_DIR));
});

gulp.task("build_client", ["move_client_systemjs"], () => {
    return clientTsProject.src()
        .pipe(sourcemaps.init())
        .pipe(clientTsProject())
        .js
        .pipe(sourcemaps.write(".", { includeContent: true, sourceRoot: CLIENT_SOURCEMAP_ROOT }))
        .pipe(gulp.dest(CLIENT_DEST_DIR));
});

gulp.task("client", ["build_client"]);
module.exports = "client";