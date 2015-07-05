# ES6 + Grunt + webpack skeleton

## Description
This is an opinionated ES6 + Grunt + webpack skeleton, also include bootstrap.
Include webpack as module bundler, grunt as task runner, karma as test runner, Jasmine as testing framework and less as css preprocessor.
You can config bootstrap from config/bootstrap/bootstrap.config.js and config/bootstrap/bootstrap.less. For more information visit [bootstrap-webpack](https://github.com/bline/bootstrap-webpack).

## Installation
1. Clone this repo
2. Install global packages
```
sudo npm install -g grunt-cli karma-cli webpack webpack-dev-server
```
3. Install local packages
```
npm install
```
4. Run tests
```
npm test
```
5. Build app
```
grunt build
```
6. Launch app from publc/index.html

## Development
Entry point is app/index.js, from here load all your js and main less.
You can compile develop web with:
```
grunt dev
```
It compiles js and less to app/ and watches for changes under app/ and recompile all. You need to serve app/index.html.
Also it generate source maps to debug app.
This form is not recommended to develop.

You can serve develop web with:
```
grunt serve
```
It launch a webpack-dev-server instance on http://localhost:8080 .
This form is recommended to develop.

## Production
You can build a production web with:
```
grunt build
```
This task will uglify your js and copy your index.html and assets to public directory.

## Tests
You can run tests with:
```
grunt karma:app
```
Or
```
npm test
```
These commands launch karma and tests app with phantomjs.
You can write new tests under tests directory. Test name must ends with Test.js. Example: UtilsTest.js .

## See also
* [webpack](https://webpack.github.io/)
* [Grunt](http://gruntjs.com/)
* [webpack-with-common-libs](https://github.com/webpack/webpack-with-common-libs)
* [Exploring ES6 ](https://leanpub.com/exploring-es6/read)
