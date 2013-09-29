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

        watch: {
            css: {
                files: 'css/*.roo',    
                tasks: ['shell:compileRoo', 'cssmin'],
                options: {
                    livereload: true    
                }
            }
        }
    }); 

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'shell', 'cssmin' ]);
};
