# Resume  
Peng Sicheng's resume
## 介绍
使用React搭建可复用web简历
## 使用  
配置环境
```
npm install
npm run dev
```
引入组件  
```
import Resume from './components/resume.js'
render(
	<Resume resumeInfo={user} />,
	container
);
```
简历文本:  
```
const user = {
	"zh":{
		"name":"",
		"position":"",
		"introduction":"",
    //职业技能	
		"skills":[		
      {
				"name":"",
				"level":"",//掌握程度按百分制,小于等于100
        "description":""
			}
		],
    //项目经验		
    "projects":[
			{
				"name":"",
				"duration":["",""],
				"description":[""],
				"duty":[""]
			}
		],
    //工作经验		
    "experience":[
			{
				"company":"",
				"duration":["",""],
				"position":"",
				"work":""
			}
		],
    //教育背景		
    "education":[
			{
				"school":"",
				"degree":"",
				"duration":["",""]
			}
		],
    //联系方式
    "contact":{
			"email":"",
			"qq":"",
			"cellPhone":"",
			"gitHub":"",
			"location":""
		}
	},
	"en":{},//同上
}
```
## 特点:  
1、自定义简历内容，单页应用;<br>
2、支持多语言扩展，预留语言切换功能；<br>
3、预留简洁和完整功能的区分；<br>
4、完整功能包含header中的小工具（日期、音乐）和index切换等；<br>
