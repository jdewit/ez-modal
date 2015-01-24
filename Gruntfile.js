'use_strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: false,
        push: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: {
        files: {
          src: ['src/**/*.js', 'test/**/*.js']
        },
      }
    },
    ngtemplates:  {
      ezModal:      {
        src:      'src/**/*.html',
        dest:     'dist/ez-modal-tpl.min.js',
        options: {
          module: 'ez.modal',
          url: function(url) { return url.replace('src', 'ez-modal'); }
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/ez-modal.min.js': ['src/ez-modal.js'],
          'dist/ez-modal-tpl.min.js': ['dist/ez-modal-tpl.min.js'],
        }
      }
    },
    watch: {
      dev: {
        files: ['src/**/*'],
        tasks: ['default']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('default', ['jshint', 'ngtemplates', 'uglify']);

};
