const gulp = require("gulp");
const clean = require("gulp-clean");

const DEST_DIR = "dist";
const BASE_DIR = "./"
const DEST_CLIENT_DIR = "dist";
const DEST_TEMP_DIR = "temp";
const CLEAN_TASKS = [
    "clean_client",
    "clean_temp"
];

gulp.task("clean_client", () => {
    gulp.src(BASE_DIR + "index.html", { read: false })
        .pipe(clean());
    return gulp.src(DEST_CLIENT_DIR, { read: false })
        .pipe(clean());
});

gulp.task("clean_temp", () => {
    gulp.src(BASE_DIR + "index.html", { read: false })
        .pipe(clean());
    return gulp.src(DEST_TEMP_DIR, { read: false })
        .pipe(clean());
});

gulp.task("clean", () => {
    gulp.src(BASE_DIR + "index.html", { read: false })
        .pipe(clean());
    return gulp.src(DEST_DIR, { read: false })
        .pipe(clean());
});

module.exports = "clean";