var gulp = require("gulp");
var sass = require("gulp-sass")
var autoprefixer = require("gulp-autoprefixer")


gulp.task("sass", function(){
  gulp.src("sass/style.scss")
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer())
  .pipe(gulp.dest("./"))
})

gulp.task("default", function() {
    gulp.watch("sass/*.scss",["sass"]);
});
