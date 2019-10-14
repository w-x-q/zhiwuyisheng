const gulp = require("gulp");
const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");

gulp.task("watchall",async ()=>{
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\newwork"));
    });
    gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\newwork\\img"));
    });
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\newwork\\js"));
    });
    gulp.watch("php/*.php",async ()=>{
        gulp.src("php/*.php")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\newwork\\php"));
    });
    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("D\\phpStudy\\WWW\\newwork\\css"));
    });
     gulp.watch("Demosass/*.scss",async ()=>{
        gulp.src("Demosass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("E:\\zhiwuyisheng\\css"));
    });

 })



