var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        webpack: {
            options: webpackConfig,
            build: {
                plugins: webpackConfig.plugins.concat(
                  new webpack.DefinePlugin({
                      "process.env": {
                          "NODE_ENV": JSON.stringify("production")
                      }
                  }),
                  new webpack.optimize.DedupePlugin(),
                  new webpack.optimize.UglifyJsPlugin()
                ),
                output: {
                    path: "./public/",
                    filename: "bundle.js"
                }
            },
            "build-dev": {
                devtool: "sourcemap",
                debug: true
            }
        },
        "webpack-dev-server": {
            options: {
                webpack: webpackConfig
            },
            start: {
                keepAlive: true,
                contentBase: "./app",
                webpack: {
                    devtool: "eval",
                    debug: true
                }
            }
        },
        watch: {
            app: {
                files: ["app/**/*"],
                tasks: ["webpack:build-dev"],
                options: {
                    spawn: false
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: './app/',
                        src: ['index.html', 'assets/'],
                        dest: './public/'
                    }
                ]
            }
        },
        clean: {
            build: ['./public/'],
            dev: [
                'app/bundle.js.map',
                'app/*.svg',
                'app/*.ttf',
                'app/*.eot',
                'app/*.woff',
                'app/bundle.js'
            ]
        },
        karma: {
            app: {
                options: {
                    configFile: 'karma.conf.js',
                    singleRun: true,
                    browsers: ['PhantomJS']
                }
            }
        }
    });

    grunt.registerTask("default", ["webpack-dev-server:start"]);
    grunt.registerTask("serve", ["webpack-dev-server:start"]);
    grunt.registerTask("build-dev", ["clean:dev", "webpack:build-dev"]);
    grunt.registerTask("dev", ["build-dev", "watch:app"]);
    grunt.registerTask('build', ['clean:build', 'webpack:build', 'copy:build']);
};