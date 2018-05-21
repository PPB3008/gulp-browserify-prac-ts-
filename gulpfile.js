var gulp = require("gulp");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var gulputil = require("gulp-util");
var wathcify = require("watchify");
var paths = {
    "pages": ['*.html']
}

gulp.task("copy-html",function (){
    return gulp.src(paths.pages)
        .pipe(gulp.dest("public"));
})

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
    .pipe(gulp.dest('public/js'));
}

gulp.task("default",["copy-html","styles:watch"],setbundle);
watched.on("update",setbundle);
// watched.on("log",gutil.log);
// var sass = require("gulp-sass");
// var tspr = ts.createProject("tsconfig.json");
// gulp.task("default",function(){
//     return tspr.src()
//         .pipe(tspr())
//         .js.pipe(gulp.dest("public/js"));
// })



gulp.task('styles',function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest("public/style"));
})

gulp.task('styles:watch',function (){
    gulp.watch('src/sass/*.scss',["styles"]);
});