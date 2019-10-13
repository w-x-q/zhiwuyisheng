const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");

gulp.task("watchall",async ()=>{
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\php\\WWW\\newwork"));
    });
    gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("D:\\php\\WWW\\newwork\\img"));
    });
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\php\\WWW\\newwork\\js"));
    });
    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("D:\\php\\WWW\\newwork\\css"));
    });
     gulp.watch("Demosass/*.scss",async ()=>{
        gulp.src("Demosass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("E:\\newwork\\css"));
    });

 })



