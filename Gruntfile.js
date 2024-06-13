module.exports = function (grunt) {
    //1. Project configuration.
    grunt.initConfig({
        //pass in options to plugins, references to files, etc

        concat: {
            commonJs: {
                src: [
                    'assets/scripts/js/bootstrap.min.js',
                    'assets/scripts/js/validate.min.js',
                    'assets/scripts/js/lazysizes.min.js',
                ],
                dest: 'assets/scripts/js/common.js',
            },
        },

        // uglify: {
        //     build: {
        //         files: [{
        //             expand: true,
        //             cwd: 'assets/scripts/js',
        //             src: ['*.js', '!*.min.js', '!main.js'],
        //             dest: 'assets/scripts/js',
        //             ext: '.min.js',
        //         },],
        //     },
        // },

        cssmin: {
            options: {
                keepSpecialComments: 0,
                mergeIntoShorthands: false,
                roundingPrecision: -1,
            },

            targetStyleSheets: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/styles/css',
                    ext: '.min.css',
                },],
            },

            targetCustomCss: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/styles',
                    ext: '.min.css',
                },],
            },
        },
    });

    //2.load plugins


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //3.register tasks


    grunt.registerTask('concat-files', ['concat']);
    grunt.registerTask('concat-css', ['concat']);
    // grunt.registerTask('uglify-js', ['uglify']);
    grunt.registerTask('uglify-css', ['cssmin:targetStyleSheets', 'cssmin:targetCustomCss']);
    grunt.registerTask('all', [
        'concat-files',
        'concat-css',
        // 'uglify-js',
        'uglify-css',
    ]);
    //code : grunt all
};