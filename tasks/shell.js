module.exports={
	runCommands:{
		command: 'echo "this is my shell command for <%= pkg.name%>"',
		options:{
			stdout:true,
			failOnError:true
		}
	},
	compress:{
		command: function(){
			return 'zip -r ../compress.zip; echo build/compress.zip is created';
		},
		options:{
			stdout:true,
			execOption:{
				cwd: '<%= destSrc%>'
			}
		}
	}	
};