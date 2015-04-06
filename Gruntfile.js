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
          'app/lib/angular/1.3.14/angular.js',
          'app/lib/angular/1.3.14/angular-route.js',
          { pattern: 'src/**/*.js', served: true },
          { pattern: 'test/**/*.js', served: true }
        ]
      },
      unit: {
        singleRun: true
      }
    },
    protractor: {
      options: {
        keepAlive: true, // If false, the grunt process stops when the test fails. 
        noColor: false, // If true, protractor will not use colors in its output. 
      },
      acceptance: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
        configFile: "acc-test/conf.js", // Target-specific config file 
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  
  grunt.registerTask('default', ['karma', 'uglify']);
};