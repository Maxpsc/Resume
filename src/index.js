import React from "react"
import {render} from 'react-dom'
import Resume from './components/resume.js'

const container = document.getElementById("container");
const user = {
	"zh":{
		"name":"彭斯诚",
		"position":"前端开发工程师",
		"introduction":"我经历了使用jquery选择符操作DOM元素，到习惯Angular的双向数据绑定但纠结于父子作用域的通信，到现在的学习React，并将ES6语法应用于实战的过程。希望进入技术氛围浓厚的团队来督促自己，和同伴一起进步，能有志同道合的同事就再好不过了。",
		"skills":[
			{
				"name":"Html",
				"level":"70",
				"description":"了解标签语义化，合理构建DOM树。"
			},
			{
				"name":"Javascript",
				"level":"80",
				"description":"原生JS基础扎实，有OOP编程经验。熟练使用Angular，正在学习react+redux构建组件化单页应用。掌握gulp, webpack前端构建工具。掌握ES2015部分新特性。"
			},
			{
				"name":"Css",
				"level":"80",
				"description":"熟练使用SASS，初步应用CSS module。"
			},
		],
		"projects":[
			{
				"name":"壹程旅游后台信息管理系统",
				"duration":["2016.10","2016.12"],
				"description":
				["基于AngularJS开发的PC端旅游信息管理系统，用于省、市、区内服务设施和具体旅游景区的数据录入、预览;",
				"录入数据方式包括文字输入，上传、裁剪图片，上传音频视频，基于高德地图选择景区地理位置，在平面图上选取相对位置等;",
				]
			},
			{
				"name":"各类主题宣传页面",
				"duration":["2015","2016"],
				"description":
				["IStudy学习资料分享网站，提供课程资料下载，允许根据关键字搜索课程资料;",
				"成都太古里活动页，静态展示页面，具有上传图片、提交报名信息等功能;",
				"南京美食节移动端宣传页;"
				]
			},
		],
		"experience":[
			{
				"company":"北京博翰时空创新科技有限公司",
				"duration":["2016-7","至今"],
				"position":"Web前端工程师",
				"work":"使用angularJS搭建PC端旅游委后台管理系统（SPA）。使用原生js和angularJS实现分页、弹窗、日历等基础组件。开发甘肃旅游主题网站等。"
			},
			{
				"company":"南京西祠信息技术股份有限公司",
				"duration":["2015-10","2015-12"],
				"position":"Web前端实习生",
				"work":"参与西祠主站改版，参与富文本编辑器的选型和适应性改造，使用jquery独立开发太古里宣传网站PC端页面和南京美食节移动端宣传页面。	"
			}
		],
		"education":[
			{
				"school":"东南大学",
				"degree":"计算机本科学位",
				"duration":["2012.9","2016.6"]
			}
		],
		"contact":{
			"email":"majiapsc@126.com",
			"qq":"",
			"cellPhone":"13*****1786",
			"gitHub":"https://github.com/maxpschub",
			"location":"中国 北京"
		}
	},
	"en":{
		"name":"Sicheng Peng",
		"position":"Front-end Developer",
		"introduction":"东南大学2016届计算机系学生，接触前端一年有余，实际工作半年，学习前端的过程经历了使用jquery选择符操作DOM元素，到习惯angular的双向数据绑定但迷茫于父子作用域的通信，到现在的学习React，并将ES6语法应用于实战。本人学习前端的过程经历了使用jquery选择符操作DOM元素，到习惯Angular的双向数据绑定但迷茫于父子作用域的通信，到现在的学习React，并将ES6语法应用于实战。曾负责一个旅游信息管理系统的前端开发工作。基本框架使用Angular，路由使用ui-router，自行开发分页、下拉菜单等基础ui组件和选取平面图位置、拖拽、H5视频截图和日历等功能性组件。希望进入技术氛围浓厚的团队来督促自己，和同伴一起进步，能有志同道合的同事就再好不过了。",
		"skills":[
			{
				"name":"Html",
				"level":"70",
				"description":"了解标签语义化，合理构建DOM树。"
			},
			{
				"name":"Javascript",
				"level":"80",
				"description":"原生JS基础扎实，有OOP编程经验。熟练使用Angular，正在学习react+redux构建组件化单页应用。掌握gulp, webpack前端构建工具。掌握ES2015部分新特性。"
			},
			{
				"name":"Css",
				"level":"80",
				"description":"熟练使用SASS，初步应用CSS module。"
			},
		],
		"projects":[
			{
				"name":"壹程旅游后台信息管理系统",
				"duration":["2016.10","2016.12"],
				"description":
				["基于AngularJS开发的PC端旅游信息管理系统，用于省、市、区内服务设施和具体旅游景区的数据录入、预览;",
				"录入数据方式包括文字输入，上传、裁剪图片，上传音频视频，基于高德地图选择景区地理位置，在平面图上选取相对位置等;",
				]
			}
		],
		"experience":[
			{
				"company":"北京博翰时空创新科技有限公司",
				"duration":["2016-7","至今"],
				"position":"WEB前端工程师",
				"work":"使用angularJS搭建PC端旅游委后台管理系统（SPA）。使用原生js和angularJS实现分页、弹窗、日历等基础组件。开发甘肃旅游主题网站等。"
			}
		],
		"education":[
			{
				"school":"Southeast University",
				"degree":"Bachelor degree in CS",
				"duration":["2012.9","2016.6"]
			}
		],
		"contact":{
			"email":"majiapsc@126.com",
			"qq":"",
			"cellPhone":"13*****1786",
			"gitHub":"https://github.com/maxpschub",
			"location":"China Beijing"
		}
	},
}
render(
	<Resume resumeInfo={user} />,
	container
);