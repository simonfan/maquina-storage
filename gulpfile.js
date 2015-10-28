var gulp        = require('gulp');
var gulpNodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  gulpNodemon({
    script: 'cli/start.js',
    ext: 'js',
    env: { 'STORAGE_PORT': 8000 }
  })
});

gulp.task('develop', ['nodemon']);