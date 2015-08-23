'use strict'

import gulp from 'gulp'
import notify from 'gulp-notify'
import nodemon from 'gulp-nodemon'
import browserify from 'browserify'
import babelify from 'babelify'
import browserSync from 'browser-sync'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'

gulp.task('server', () => {
  nodemon({
    script: 'index.js',
    env: {
      TZ: 'UTC',
      NODE_ENV: 'development'
    },
    ignore: ['build/*', 'components/*', 'app.js']
  })
})

gulp.task('browser-sync', () => {
  browserSync({
    proxy: {
      target: 'http://localhost:3000'
    },
    port: 8080
  })
})

gulp.task('build', () => {
  browserify({entries: ['./app.js']})
    .transform(babelify)
    .bundle()
    .on('error', notify.onError('<%= error.message %>'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(notify('build'))
})

gulp.task('watch', () => {
  gulp.watch('./app.js', ['build'])
  gulp.watch('./index.html', ['build'])
  gulp.watch('./components/*.js', ['build'])
})

gulp.task('default', ['server', 'build', 'browser-sync', 'watch'])
