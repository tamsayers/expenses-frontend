module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'app/js/<%= pkg.name %>.min.js'
      }
    },
    karma: {
      options: {
        browsers : ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
          { pattern: 'app/lib/**/*.js', served: true },
          { pattern: 'src/**/*.js', served: true },
          { pattern: 'test/**/*.js', served: true }
        ]
      },
      unit: {
        singleRun: true
      },
      dev: {
        singleRun: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  
  grunt.registerTask('default', ['karma', 'uglify']);
};