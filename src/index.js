import React from "react"
import {render} from 'react-dom'
import Resume from './components/resume.js'

const container = document.getElementById("container");
const user = {
	"zh":{
		"name":"彭斯诚",
		"position":"高级前端开发工程师",
		"introduction":"",
		"skills":[
			{
				"name":"Vue",
				"level": "90",
				"description":"vue-router, vuex, 深度使用，了解原理，应用于大规模应用的开发，深入调研weex"
			},
			{
				"name":"React",
				"level":"60",
				"description":"react-router4, redux, 实现常用组件，合理设计state结构"
			},
			{
				"name":"JS(browser, node)",
				"level":"80",
				"description":"ES5, ES6+, NPM scripts, express, webpack打包优化"
			},
			{
				"name":"angular",
				"level":"80",
				"description":"angular 1.X, AMD模块化 "
			},
		],
		"projects":[
			{
				"name": "滴滴先锋",
				"duration": ["2018.5", "至今"],
				"description": [
					"一个为商务推广人员提供的方便签约、管理商家的工具",
					"webapp，通过jsBridge与端通信并调用原生能力",
					"组件库使用基于cube-ui结合内部业务衍生的rich-ui，并向其贡献组件",
					"动态化调研，选型weex并深入调研"
				]
			},
			{
				"name": "外卖mis系统",
				"duration": ["2018.4", "至今"],
				"description": [
					"参与设计并实现可配置化高阶组件如form, table",
					"需求评审，业务开发"
				]
			},
			{
				"name": "网络威胁态势感知系统",
				"duration": ["2017.10", "2018.4"],
				"description":
					[
						"使用vue, vuex, vue-router, 基于element-ui封装私有组件负责内部安全监测app的前端开发",
						"D3实现可拖拽选取范围柱状统计图",
						"Three.js实现3D地球可视化预研"
					]
			},
			{
				"name": "各类数据可视化组件的开发",
				"duration": ["2017.3", "2017.10"],
				"description":
					[
						"D3实现正多边形生成器，并可拓展为可拖拽多维能力图",
						"使用echarts开发大屏实时攻击监测平台，展示地图多点间攻击，利用饼状图、柱状图、列表统计攻击IP与被攻击host的相关数据"
					]
			},
			{
				"name": "开源博客网站-Ocean",
				"duration": ["2017,6", "至今"],
				"description":
					[
						"具体项目见https://github.com/Maxpsc/Ocean",
						"技术栈：数据库mongodb, mongoose; 后端node, express; 前端react, redux, es6, material-ui"
					]
			},
			{
				"name": "WEB失陷检测工具",
				"duration": ["2017.3", "2017.5"],
				"description":
					["回收网络日志，根据制定规则给出分析结果，并根据已有数据和模板生成报告"],
				"duty":
					["使用ng1开发，并配置require和ui-router实现单页应用资源的按需加载", "基于D3或echarts, 根据需求开发可复用的可视化组件", "持续优化页面样式和JS性能，搭建单元测试环境"]
			}
			// {
			// 	"name":"壹程旅游后台信息管理系统",
			// 	"duration":["2016.10","2016.12"],
			// 	"description":
			// 	["基于AngularJS开发的PC端旅游信息管理系统，用于省、市、区内服务设施和具体旅游景区的数据录入、预览;",
			// 	"录入数据方式包括文字输入，上传、裁剪图片，上传音频视频，基于高德地图选择景区地理位置，在平面图上选取相对位置等;"
			// 	],
			// 	"duty":
			// 	["根据产品需求做技术选型，并进行前端页面的开发，后期维护，重构等工作;",
			// 	"与产品团队沟通需求和协商功能，确保最佳实现方案;",
			// 	"与后端开发人员协商数据接口并对接;"
			// 	]
			// }
		],
		"experience":[
			{
				"company": "北京嘀嘀无限科技发展有限公司",
				"duration": ["2018.4", "至今"],
				"position": "高级软件开发工程师",
				"work": "负责滴滴先锋国内和国际版的需求评审、技术调研、整体设计和开发，参与mis系统的开发和基础组件封装，国际化技术方案落地，从技术角度优化app以提升用户的体验和工作效率"
			},
			{
				"company":"360企业安全",
				"duration":["2017.3","2018.4"],
				"position":"前端开发工程师",
				"work":"负责web失陷检测工具、POC scanner的前端开发，基于D3和echarts开发数据可视化组件。负责网络威胁态势感知系统-安全检测模块的开发工作，优化webpack打包策略。"
			},
			{
				"company":"北京博翰时空创新科技有限公司",
				"duration":["2016-7","2017.2"],
				"position":"Web前端工程师",
				"work":"使用angularJS搭建PC端旅游委后台管理系统（SPA）。使用原生js和angularJS实现分页、弹窗、日历等基础组件。开发甘肃旅游主题网站等。"
			}
			// {
			// 	"company":"南京西祠信息技术股份有限公司",
			// 	"duration":["2015-10","2015-12"],
			// 	"position":"Web前端实习生",
			// 	"work":"参与西祠主站改版，参与富文本编辑器的选型和适应性改造，使用jquery独立开发太古里宣传网站PC端页面和南京美食节移动端宣传页面。	"
			// }
		],
		"education":[
			{
				"school":"东南大学",
				"degree":"计算机本科学位",
				"duration":["2012.9","2016.6"]
			}
		],
		"contact":{
			"email":"个人: majiapsc@126.com 企业: pengsicheng@didiglobal.com",
			"qq":"2654310198",
			"cellPhone":"13255291786",
			"gitHub":"https://github.com/Maxpsc",
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
