module.exports=function(grunt){
	
	var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'tasks'),
		 data: {
            pkg: grunt.file.readJSON('package.json'),
           	destDir: 'build'
        },
		init: true
		// loadGruntTasks: {
		// 	pattern: 'grunt-*',
		// 	config: require('./package.json'),
		// 	scope: 'devDependencies'
		// },
		// postProcess:
	});
	//project configure
	// grunt.initConfig({
	// 	pkg: grunt.file.readJSON('package.json'),
	// 	// uglify: {
	// 	// 	options: {
	// 	// 		banner: '/*! <%= pkg.name%> <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
	// 	// 	},
	// 	// 	build: {
	// 	// 		src: 'src/<%= pkg.name%>.js',
	// 	// 		dest: 'build/<%= pkg.name%>.min.js'
	// 	// 	}
	// 	// },
	// 	log: {
	// 		foo: [1, 2, 3],
	// 		bar: "hello world",
	// 		baz: false
	// 	}	
	// });
	
	//loading task plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//default task
	grunt.registerTask('default', ['uglify']);

	//define a simple tasks
	grunt.registerTask('firstSimpleTask', 'This is a simple grunt task', function(){
		grunt.log.write("this is a simple grunt task..").ok();
	});	

	//`grunt log:a:b`(the a and b is parameter)
	grunt.registerTask('log', 'log stuff', function(a, b){
		grunt.log.writeln(this.name, a, b);
	});

	//asynchronous task
	grunt.registerTask('asyncFoo', 'My "async" task', function(){
		var done = this.async();

		grunt.log.writeln("Processing task....");

		setTimeout(function() {
			grunt.log.writeln("All done!");
			done();
		}, 10000);

		grunt.log.writeln("task end...")
	});

	grunt.registerTask('access', 'Access log parameter', function(){
		grunt.log.writeln(grunt.config('log.foo'));	
	});
}
