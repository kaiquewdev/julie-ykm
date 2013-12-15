module.exports = exports = function ( grunt ) {
    grunt.initConfig({
        shell: {
            server: {
                options: {
                    stdout: true  
                },
                command: 'python -m SimpleHTTPServer'
            },
            compileRoo: {
                options: {
                    stdout: true,    
                },
                command: 'roole css/*.roo'
            },
        },

        cssmin: {
            combine: {
                files: {
                    'css/main.min.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }    
            }
        },

        uglify: {
            production_package: {
                files: {
                    'js/main.min.js': [
                        'bower_components/jquery/jquery.js',
                        'js/main.js',
                    ]
                }
            }
        },

        watch: {
            css: {
                files: 'css/*.roo',    
                tasks: ['shell:compileRoo', 'cssmin'],
                options: {
                    livereload: true    
                }
            },

            js: {
                files: [
                    'js/main.js',
                ],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }
    }); 

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'shell', 'cssmin', 'uglify' ]);
};
