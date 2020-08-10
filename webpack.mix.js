const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
        proxy: 'http://laravelvue.test/',
        files: [
            'app/**/*',
            'resources/views/**/*',
            'resources/lang/**/*',
            'routes/**/*'
        ]
    });
