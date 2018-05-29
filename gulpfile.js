var gulp = require("gulp");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var gulputil = require("gulp-util");
var wathcify = require("watchify");
var liveReload = require("gulp-livereload");
var paths = {
    "pages": ['*.html']
}



var watched = wathcify(browserify({
    basedir: ".",
    debug: "true",
    entries: "src/ts/show.ts",
    cache: {},
    packageCache: {}
}).plugin(tsify));

function setbundle() {
   return watched.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(liveReload());
}


watched.on("update",setbundle);

gulp.task("copy-html",function (){
    return gulp.src(paths.pages)
        .pipe(gulp.dest("public"));
})

gulp.task('styles',function(){
    return gulp.src('src/sass/custom.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest("public/style"))
})





// watched.on("log",gutil.log);
// var sass = require("gulp-sass");
// var tspr = ts.createProject("tsconfig.json");
// gulp.task("default",function(){
//     return tspr.src()
//         .pipe(tspr())
//         .js.pipe(gulp.dest("public/js"));
// })



gulp.task('styles:watch',function (){
    gulp.watch('src/sass/*.scss',["styles"]);
});

gulp.task('html:watch',function (){
    gulp.watch('index.html',["copy-html"]);
});

gulp.task('gulp-livereload',function (){
    liveReload.listen({
        // hostname: 'localhost',
        // port: 8083,
        start: true
    });
    gulp.watch(['public/**/*.*'],function(ele){
        liveReload.changed(ele.path);
    })
});


gulp.task("default",["html:watch","styles:watch","gulp-livereload"],setbundle);