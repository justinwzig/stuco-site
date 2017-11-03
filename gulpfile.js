const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

const pug = require('gulp-pug')

const uglify = require('gulp-uglify')

const stylus = require('gulp-stylus')
const cleanCSS = require('gulp-clean-css')

const source = 'src/**/*' 
const clientOutput = 'docs'
const html = '.pug'
const styles = '.styl'
const scripts = '.js'
const rawcss = '.css'

gulp.task('html', function () {
  return gulp.src(['!src/includes/*', '!src/layouts/*', source + html])
    .pipe(pug())
    .pipe(gulp.dest('docs/'))
})  

gulp.task('styles', function () {
  return gulp.src(source + styles)
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest(clientOutput))
})

gulp.task('rawcss', function () {
  return gulp.src(source + rawcss)
    .pipe(cleanCSS())
    .pipe(gulp.dest(clientOutput))
})

gulp.task('scripts', function () {
  return gulp.src(source + scripts)
    .pipe(uglify())
    .pipe(gulp.dest(clientOutput))
})

gulp.task('nodemon', function () {
  nodemon({basedir: 'src'})
})

gulp.task('watch', function () {
  gulp.watch(source + html, ['html'])
  gulp.watch(source + styles, ['styles'])
  gulp.watch(source + scripts, ['scripts'])
})

gulp.task('default', ['watch', 'html', 'scripts', 'styles', 'rawcss'])
