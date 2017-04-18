var gulp = require('gulp');
var babel = require('gulp-babel');
// var sass = require('node-sass'); 

gulp.task('es6', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/'));
});
// gulp.task('sass', function () { 
// 	gulp.src('src/css/*.scss') .pipe(sass()) 
// 	.pipe(gulp.dest('dist/css')); 
// }); 
gulp.task('default', function(){
  gulp.run('watch');
});
gulp.task('watch', ['es6'], function() {
   gulp.watch('src/**/*.js', ['es6']);
   // gulp.watch('src/**/*.scss', ['sass']);
 });

