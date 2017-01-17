var gulp = require('gulp'),
    less = require('gulp-less'),
    auto = require('gulp-autoprefixer'),
    map = require('gulp-sourcemaps'),
    cssmin = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    rev = require('gulp-rev-append'),
    jsmin = require('gulp-uglify');

gulp.task('Less',function(){
    gulp.src(['src/less/*.less','!src/less/mixin.less'])
        .pipe(less())
        .pipe(auto({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true
            remove:false //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(concat('style.min.css'))
        .pipe(rev())
        .pipe(cssmin({
            advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('src/css'))
})

gulp.task('cssMin',function(){
    gulp.src('src/css/*.css')
        .pipe(rev())
        .pipe(cssmin({
            advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(concat('style.min.css'))   //rename压缩后的文件名
        .pipe(gulp.dest('dest/css'))
})

gulp.task('jsMin',function(){
    gulp.src('src/js/script.js')
        .pipe(jsmin({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dest/js'))
})

gulp.task('watchLess',function(){
    gulp.watch('src/less/*.less',['Less']);
})