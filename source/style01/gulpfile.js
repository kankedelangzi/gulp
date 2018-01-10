var gulp = require('gulp');
var less = require('gulp-less');

// 定义一个任务
gulp.task('testLess', function() {
    gulp.src('src/less/index.less') // 本任务所针对的文件
        .pipe(less()) // 本任务调用的模块
        .pipe(gulp.dest('src/css')) // 将会在src/css 下生成index.css
});

gulp.task('default', ['testLess']);
