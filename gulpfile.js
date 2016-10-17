var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	minifycss = require('gulp-minify-css');


gulp.task('sass', function() {
	return gulp.src('./Public/_sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('./Public/css'))
})

gulp.task('minifycss', ['sass'], function() {
	return gulp.src(['./Public/css/style.css', './Public/css/core/core.css'], {
			base: './'
		})
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(minifycss())
		.pipe(gulp.dest(''))
})

gulp.task('minifyjs', function() {
	return gulp.src('./Public/script/*.js')
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./Public/script/min'))
})

gulp.task('default', ['sass', 'minifycss', 'minifyjs'])

gulp.watch('./Public/css/core/core.css', ['minifycss']);

var wcss = gulp.watch('./Public/_sass/*.scss', ['sass', 'minifycss']);
wcss.on('change', function() {
	console.log('css change');
})

var wjs = gulp.watch('./Public/script/*.js', ['minifyjs']);
wjs.on('change', function() {
	console.log('js change');
})