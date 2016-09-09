// 包装函数
module.exports = function(grunt) {

  var sassStyle = 'compact';

  // 任务配置,所有插件的配置信息
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
  	sass: {
  		dist: {
  			options: {
  			  	style: sassStyle,
  			  	sourcemap: 'none'  //设置不要配套输出map文件
  			},
  			files: {
  				'Public/css/style.css': 'Public/_sass/style.scss'
  			}
  		}
  	},

    // uglify插件的配置信息
    uglify: {
        build: {
          files:[{
            expand: true,
            cwd: 'Public/script/',
            src: '*.js',
            dest: 'Public/script/min',
            ext: '.min.js'
          }]
        }
    },
    
    // cssmin插件的配置信息
    cssmin: {
    	options: {
    	    beautify: {
    	        //中文ascii化，非常有用！防止中文乱码的神配置
    	        ascii_only: true
    	    }
    	},
    	target: {
  			files: [{
  				expand: true,
  				cwd: 'Public/css/',
  				src: ['*.css','core/*.css','!core/*.min.css','!*.min.css'],
  				dest: 'Public/css/',
  				ext: '.min.css'
  			}]
    	}
    },
    
    watch: {
  		scripts: {
  			files: ['Public/script/*.js','!Public/script/*.min.js'],
  			tasks: ['uglify']
  		},
  		sass: {
  			files: ['Public/_sass/*.scss'],
  			tasks: ['sass','cssmin']
  		}
    }
  });
   
       
  // 告诉grunt我们将使用插件
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 
  // 告诉grunt当我们在终端中输入grunt时需要做些什么
  grunt.registerTask('compresscss', ['cssmin']);
  grunt.registerTask('compilesass',['sass']);
   grunt.registerTask('uglifyJS',['uglify']);
  grunt.registerTask('watchit',['watch','sass','cssmin','uglify']);
};