var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    minifycss    = require('gulp-uglifycss'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    include      = require("gulp-include"),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    lineec       = require('gulp-line-ending-corrector'),
    filter       = require('gulp-filter'),
    sourcemaps   = require('gulp-sourcemaps'),
    notify       = require('gulp-notify');


const AUTOPREFIXER_BROWSERS = [
    'last 2 version',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4',
    'bb >= 10'
  ];

 gulp.task('styles', function () {
    gulp.src( './_/assets/css/style.scss' )
    .pipe( sourcemaps.init() )
    .pipe( sass( {
      errLogToConsole: true,
      //outputStyle: 'compact',
      outputStyle: 'compressed',
      keepSpecialComments: 1      ,
      //outputStyle: 'nested',
      //outputStyle: 'expanded',
      precision: 10
    } ) )
    .on('error', console.error.bind(console))
    .pipe( sourcemaps.write( { includeContent: false } ) )
    .pipe( sourcemaps.init( { loadMaps: true } ) )
    .pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
    .pipe( sourcemaps.write ( './' ) )
    .pipe( lineec() )
    .pipe( gulp.dest( './' ) )
    .pipe( notify( { message: 'TASK: "styles" Completed.', onLast: true } ) )
 });

 gulp.task( 'scripts', function() {
    gulp.src('./_/assets/js/app.js')
    .pipe(include({
        includePaths: [
          __dirname + "/bower_components",
        ]
      }))
    .pipe( concat( 'main' + '.js' ) )
    .pipe( uglify() )
    .pipe( lineec() )
    .pipe( gulp.dest( './_/assets/js/' ) )
    .pipe( notify( { message: 'TASK: "javascript" Completed.', onLast: true } ) );
 });

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('_/assets/css/*', ['styles']); // gulp watch for style changes
  gulp.watch('_/assets/js/app.js', ['scripts']); // gulp watch for script changes});
});
