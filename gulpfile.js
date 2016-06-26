const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const nested = require('postcss-nested');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');
const atImport = require("postcss-import")


gulp.task('css', function () {
    var processors = [
        atImport(),
        nested,
        cssnext(),
        cssnano()
    ];
    return gulp.src('css/style.pcss')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', ['js', 'css'], function () {
});