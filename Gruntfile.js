module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js'],
          dest: 'dist/'
        }]
      }
    }
  });

  // Default task(s).
  grunt.loadNpmTasks("grunt-babel");
  grunt.registerTask("default", ["babel"]);
};
