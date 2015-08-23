require('babel/register');
require('./gulpfile.es6');
// var babelify = require('babelify');
// var browserify = require('browserify');
// var browserSync = require('browser-sync');
// var buffer = require('vinyl-buffer');
// var gulp = require('gulp');
// var notify = require('gulp-notify');
// var source = require('vinyl-source-stream');
//
// gulp.task('browser-sync', function()
//   browserSync({
//     proxy: {
//       target: 'http://localhost:3000'
//     },
//     port: 8080
//   });
// });
//
// // JavaScriptへのビルド
// // ES6かつJSXなファイル群をbuild/bundle.jsへ変換する
// gulp.task('build', function() {
//   browserify({entries: ['./index.js']})
//     .transform(babelify)
//     .bundle()
//     .on('error', notify.onError('<%= error.message %>'))
//     .pipe(source('bundle.js'))
//     .pipe(buffer())
//     .pipe(gulp.dest('./build'))
//     .pipe(notify('build'))
//     .pipe(browserSync.reload({stream: true}))
// });
//
// // ファイル監視
// // ファイルに更新があったらビルドしてブラウザリロード
// gulp.task('watch', function() {
//   gulp.watch('./index.js', ['build']);
//   gulp.watch('./index.html', ['build']);
//   gulp.watch('./components/*.js', ['build']);
// });
//
// // gulpコマンドを実行した時のデフォルトタスク
// gulp.task('default', ['build', 'watch', 'browser-sync']);
