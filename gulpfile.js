var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('hello');
  done();
}

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
});


gulp.task('sass', function(){
  return gulp.src('./styles/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./dist/css'))
});