  
var ver = new Date();
var time = ver.getTime();

ver = time;

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell-spawn');

  grunt.initConfig({
  	mppkg: grunt.file.readJSON('package.json'),
    config: {
      domain: 'DADABUREAU'
    },

    shell: {
      mjmle: {
        command: 'mjml -r src/engagment/*.mjml'
      },
      mjmln: {
        command: 'mjml -r src/notification/*.mjml'
      },
      mjmlp: {
        command: 'mjml -r src/premium/*.mjml'
      },
      mkdir: {
        command: 'sudo mkdir version-'+ver
      },
      mv: {
        command: 'sudo mv *html version-'+ver+'/'
      },
      mvdir: {
        command: 'sudo mv version-'+ver+' build/'
      },
    },

  });

	grunt.registerTask('buildmails', ['shell']);

};