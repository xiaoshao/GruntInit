module.exports=function(grunt){
	
	//project configure
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name%> <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			build: {
				src: 'src/<%= pkg.name%>.js',
				dest: 'build/<%= pkg.name%>.min.js'
			}
		}	
	});
	
	//loading task plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//default task
	grunt.registerTask('default', ['uglify']);

	//define a simple tasks

	grunt.registerTask('firstSimpleTask', 'This is a simple grunt task', function(){
		grunt.log.write("this is a simple grunt task..").ok();
	});	
}
