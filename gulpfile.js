var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

gulp.task("sass", function() {
  return gulp
    .src("styles/styles.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(rename("style.css"))
    .pipe(gulp.dest("public/css"));
});

gulp.task("watch", function() {
  return gulp.watch(
    ["styles/**/*.scss", "public/javascripts/**/*.js"],
    ["sass", "build"]
  );
});

gulp.task("default", ["sass"]);

gulp.task("concat", function() {
  return gulp
    .src([
      "public/libs/jquery/dist/jquery.js",
      "public/libs/materialize/dist/js/materialize.js",
      "public/javascripts/**/*.js"
    ])
    .pipe(concat("app.bundle.js"))
    .pipe(gulp.dest("public/dist"));
});

gulp.task("minify", function() {
  return gulp
    .src("public/dist/app.bundle.js")
    .pipe(
      uglify({
        mangle: true
      })
    )
    .pipe(rename("app.bundle.min.js"))
    .pipe(gulp.dest("public/dist"));
});

gulp.task("build", ["concat", "minify"]);
