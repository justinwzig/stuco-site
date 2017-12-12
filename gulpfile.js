const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

const pug = require('gulp-pug')

const uglify = require('gulp-uglify')

const stylus = require('gulp-stylus')
const cleanCSS = require('gulp-clean-css')

const util = require('gulp-util');

const source = 'src/**/*' 
const clientOutput = 'docs'
const html = '.pug'
const styles = '.styl'
const scripts = '.js'
const rawcss = '.css'
const assets = 'assets/*'
const img =  'img/*'

var config = {
  production: !!util.env.production
};

gulp.task('html', function () {
  return gulp.src(['!src/includes/*.pug', '!src/layouts/*.pug', source + html])
    .pipe(config.production ? pug({pretty: true}) : pug({pretty: false}))
    .pipe(gulp.dest(clientOutput))
})  

gulp.task('styles', function () {
  return gulp.src(source + styles)
    .pipe(stylus())
    .pipe(config.production ? cleanCSS() : util.noop())
    .pipe(gulp.dest(clientOutput))
})

gulp.task('rawcss', function () {
  return gulp.src(source + rawcss)
    .pipe(config.production ? cleanCSS() : util.noop())
    .pipe(gulp.dest(clientOutput))
})

gulp.task('scripts', function () {
  return gulp.src(source + scripts)
    .pipe(config.production ? uglify() : util.noop())
    .pipe(gulp.dest(clientOutput))
}) 

gulp.task('nodemon', function () {
  nodemon({basedir: 'src'})
})

gulp.task('watch', function () {
  gulp.watch(source + html, ['html'])
  gulp.watch(source + styles, ['styles'])
  gulp.watch(source + scripts, ['scripts'])
  gulp.watch(source + rawcss, ['rawcss'])
})

gulp.task('default', ['watch', 'html', 'scripts', 'styles', 'rawcss'])
