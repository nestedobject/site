'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const inlinesource = require('gulp-inline-source');

gulp.task('minify', () => {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
  return gulp.src('src/assets/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('minify:watch', () => {
  gulp.watch('src/**/*.html', ['minify']);
});

gulp.task('default', ['minify', 'assets'], () => {
  return;
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.css', 'src/**/*.html', 'src/assets/*.*'], ['minify', 'assets']);
});
