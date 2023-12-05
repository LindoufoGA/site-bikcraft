const gulp = require("gulp");
const uglify = require("gulp-uglify");
const imageMin = require("gulp-imagemin");

function comprimeImg() {
  return gulp.src("./img/**/*").pipe(imageMin()).pipe(gulp.dest("./img/"));
}

function comprimeJs() {
  return gulp.src("./js/*.js").pipe(uglify()).pipe(gulp.dest("./js/"));
}
gulp.task("default", gulp.series(comprimeJs));
gulp.task("default", gulp.series(comprimeImg));
