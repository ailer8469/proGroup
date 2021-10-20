const { src, dest, series, parallel, watch } = require("gulp");

// 只是移動php檔案
function php(){
    return src(["dev/phps/*.*", "dev/phps/**/*.*"])
    .pipe(dest("dist/php"));
}

// 只是移動php檔案
function phpconnect(){
    return src(["dev/*.php",])
    .pipe(dest("dist"));
}

// 移動 font字體
function font(){
    return src(["dev/font/*.*", "dev/font/**/*.*"])
    .pipe(dest("dist/font"));
}


// sass 編譯
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");

function sassStyle() {
    return src("dev/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS({ compatibility: "ie10" }))
        .pipe(dest("dist/css"));
}

// html template
const fileinclude = require("gulp-file-include");

function includeHTML() {
    return src("dev/*.html")
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(dest("dist"));
}

// 打包圖片  // 路徑  dev/images/*.*
const imagemin = require("gulp-imagemin");

function imgs_dev() {
    return src(["dev/images/*.*", "dev/images/**/*.*"])
        .pipe(dest("dist/images"));
}

// 壓圖
function imgs_prod() {
    return src(["dev/images/*.*", "dev/images/**/*.*"])
        .pipe(imagemin()) // 壓圖
        .pipe(dest("dist/images"));
}


//清除舊檔案
const clean = require("gulp-clean");

function clear() {
    return src("dist", { read: false, allowEmpty: true }).pipe(
        clean({ force: true })
    );
}

// js es6 -> es5
const babel = require("gulp-babel");

function babel5() {
    return src("dev/js/*.js")
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(dest("dist/js"));
}

//同步瀏覽器
const browserSync = require("browser-sync");
const reload = browserSync.reload;

function browser() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html",
        },
        port: 3000,
    });
    watch(["dev/*.html", "dev/**/*.html"], includeHTML).on("change", reload);
    watch(["dev/sass/*.scss", "dev/sass/**/*.scss"], sassStyle).on(
        "change",
        reload
    );
    watch(["dev/image/*.*", "dev/image/**/*.*"], imgs_dev).on(
        "change",
        reload
    );
    watch("dev/js/*.js", babel5).on("change", reload);
    watch("dev/*.php",phpconnect).on("change", reload);
    watch("dev/phps/*.*",php).on("change", reload);
}

// 開發用
exports.default = series(clear,imgs_dev,font, includeHTML, sassStyle, babel5, php ,phpconnect, browser);


//先清除舊檔案，再同時執行其他的、再壓縮圖檔
exports.prod = series(
    clear,
    parallel(includeHTML, sassStyle, babel5, php,phpconnect),
    imgs_prod, font
);
