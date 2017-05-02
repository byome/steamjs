require("load-grunt-tasks")(grunt);

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    babel: {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        "dist/steam.js": "src/index.js"
      }
    }
  });

  // Default task(s).
  grunt.registerTask("default", ["babel"]);
};
