/*
简介：
gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用她，我们不仅可以很愉快的编写代码，而且大大提高我们的工作效率。

gulp是基于Nodejs的自动任务运行器， 她能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。在实现上，她借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。通过本文，我们将学习如何使用Gulp来改变开发流程，从而使开发更加快速高效。

gulp 和 grunt 非常类似，但相比于 grunt 的频繁 IO 操作，gulp 的流操作，能更快地更便捷地完成构建工作。

本示例以gulp-less为例（将less编译成css的gulp插件）展示gulp的常规用法，只要我们学会使用一个gulp插件后，其他插件就差看看其帮助文档了。让我们一起来学习gulp吧！ ^_^

gulp常用地址：

gulp官方网址：http://gulpjs.com

gulp插件地址：http://gulpjs.com/plugins

gulp 官方API：https://github.com/gulpjs/gulp/blob/master/docs/API.md

gulp 中文API：http://www.ydcss.com/archives/424
*/
// 使用步骤
/*
    1 安装 nodeJS npm   （这些不会请自行放弃，先学基础的）

    2 全局安装 gulp （ npm install -g 成功后执行 gulp -v）

    3 新建文件夹（project） 在文件目录下 构建 npm init (不会的请百度)

    4 在project文件下安装  npm install --save-dev
    5 安装 npm install gulp-less --save-dev
    6构建 gulpfile.js 内容如下
*/
var gulp = require('gulp'); // 引入 gulp
var less = require('gulp-less'); // 引入gulp的 gulp-less包

// 定义一个任务
gulp.task('testLess', function() {
    gulp.src('src/less/index.less') // 本任务所针对的文件
        .pipe(less()) // 本任务调用的模块
        .pipe(gulp.dest('src/css')) // 将会在src/css 下生成index.css
});

gulp.task('default', ['testLess']);


/*
 命令行输入  gulp testLess
 这样
src/less/index.less这个文件下的less代码就会被gulp转译到了src/css/index.css中了，请亲自尝试
源代码在source 下的style01文件夹下，也可以直接尝试
*/
