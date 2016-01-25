/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        clean: ['build', 'dist']
    });

    // Minification
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // code check
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // development server
    grunt.loadNpmTasks('grunt-contrib-connect');
    // testing
    grunt.loadNpmTasks('grunt-mocha');
    // version number syncing before releasing
    grunt.loadNpmTasks('grunt-sync-pkg');
    // file templates
    grunt.loadNpmTasks('grunt-include-replace');
    // copy bower components
    grunt.loadNpmTasks('grunt-bower');
    // Clean up
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean']);
};
