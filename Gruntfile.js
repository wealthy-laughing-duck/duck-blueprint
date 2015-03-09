module.exports = function(grunt) {

  grunt.initConfig({
    aglio: {
      docs: {
        files: {
          'index.html': 'api.md',
        },
        options: {
          theme: "slate"
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          keepalive : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-aglio');

  grunt.registerTask('default', ['aglio', 'connect']);
};
