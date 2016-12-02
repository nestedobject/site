'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('minify', ['sass'], () => {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
  return gulp.src('src/assets/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('css', ['sass'], () => {
  return gulp.src('src/css/*.*')
    .pipe(sass({outputStyle: 'compressed'})
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('minify:watch', () => {
  gulp.watch('src/**/*.html', ['minify']);
});

gulp.task('default', ['sass', 'minify', 'assets', 'css'], () => {
  return;
});

gulp.task('watch', () => {
  gulp.watch(['scss/**/*.scss', 'src/**/*.html', 'src/assets/*.*'], ['sass', 'minify', 'assets']);
});
