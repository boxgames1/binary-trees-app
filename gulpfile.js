const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("styleComponents", () => {
  // Individual components style (for export!)
  gulp
    .src("./src/scss/*.scss")
    .pipe(sass({ includePaths: ["_/sass/"] }))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css"));
});
// Watch task
gulp.task("watch", () => {
  gulp.watch("./**/*.scss", ["styleComponents"]);
});
