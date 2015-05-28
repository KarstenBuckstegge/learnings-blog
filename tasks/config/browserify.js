/**
 * Compile JSX files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles jsx files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 */
module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;

  grunt.config.set('browserify', {
    js: {
      src : require('../pipeline').browserifyMainFile,
      dest: '.tmp/public/js/app.' + version + '.js'
    },
    options: {
      transform: ['babelify']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};