const gulp = require("gulp");
const clienttask = require("./gulp-tasks/client");
const cleantask = require("./gulp-tasks/clean");
require("./gulp-tasks/client-aot");

const CLIENT_FILES = "src/**/*.*";

const TASKS = [
    clienttask,
];

gulp.task("default", TASKS);

gulp.task("watch", TASKS, function () {
    gulp.watch(CLIENT_FILES, [clienttask]);
});
