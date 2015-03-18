/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files. Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see (the original):
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(gulp, plugins, growl) {

    // Insert JS, CSS and template dev links into HTML files in the tmp assets folder
    gulp.task('sails-linker-gulp:devAssets', function() {
        // Read templates
        return gulp.src('.tmp/public/**/*.html')
            // Link the javaScript
            .pipe(plugins.linker({
                scripts: [require('../pipeline').jsFilesToInject],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: [require('../pipeline').cssFilesToInject],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            }))
            // Write modified files...
            .pipe(gulp.dest('.tmp/public/'));
    });

    // Insert JS, CSS and template dev links into HTML and EJS files in the views folder
    gulp.task('sails-linker-gulp:devViews', function() {
        // Read templates
        return gulp.src(['views/**/*.html', 'views/**/*.ejs'])
            // Link the javaScript
            .pipe(plugins.linker({
                scripts: [require('../pipeline').jsFilesToInject],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: [require('../pipeline').cssFilesToInject],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            }))
            // Write modified files...
            .pipe(gulp.dest('views/'));
    });

    // Insert relative JS, CSS and template dev links into HTML files in the tmp assets folder
    gulp.task('sails-linker-gulp:devAssetsRelative', function() {
        // Read templates
        return gulp.src('.tmp/public/**/*.html')
            // Link the JavaScript
            .pipe(plugins.linker({
                scripts: [require('../pipeline').jsFilesToInject],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: [require('../pipeline').cssFilesToInject],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Write modified files...
            .pipe(gulp.dest('.tmp/public/'));
    });

    // Insert relative JS, CSS and template dev links into HTML and EJS files in the views folder
    gulp.task('sails-linker-gulp:devViewsRelative', function() {
        // Read templates
        return gulp.src(['views/**/*.html', 'views/**/*.ejs'])
            // Link the javaScript
            .pipe(plugins.linker({
                scripts: [require('../pipeline').jsFilesToInject],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: [require('../pipeline').cssFilesToInject],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Write modified files...
            .pipe(gulp.dest('views/'));
    });

    // Insert JS, CSS and template production links into HTML files in the tmp assets folder
    gulp.task('sails-linker-gulp:prodAssets', function() {
        // Read templates
        return gulp.src('.tmp/public/**/*.html')
            // Link the JavaScript
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.js'],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.css'],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            }))
            // Write modified files...
            .pipe(gulp.dest('.tmp/public/'));
    });

    // Insert JS, CSS and template production links into HTML and EJS files in the views folder
    gulp.task('sails-linker-gulp:prodViews', function() {
        // Read templates
        return gulp.src(['views/**/*.html', 'views/**/*.ejs'])
            // Link the JavaScript
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.js'],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.css'],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            }))
            // Write modified files...
            .pipe(gulp.dest('views/'));
    });

    // Insert relative JS, CSS and template production links into HTML files in the tmp assets folder
    gulp.task('sails-linker-gulp:prodAssetsRelative', function() {
        // Read templates
        return gulp.src('.tmp/public/**/*.html')
            // Link the JavaScript
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.js'],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.css'],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Write modified files...
            .pipe(gulp.dest('.tmp/public/'));
    });

    // Insert relative JS, CSS and template production links into HTML and EJS files in the views folder
    gulp.task('sails-linker-gulp:prodViewsRelative', function() {
        // Read templates
        return gulp.src(['views/**/*.html', 'views/**/*.ejs'])
            // Link the JavaScript
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.js'],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Link the styles
            .pipe(plugins.linker({
                scripts: ['.tmp/public/concat/production.min.css'],
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            }))
            // Write modified files...
            .pipe(gulp.dest('views/'))
    });

};
