import React, {Component,PropTypes} from 'react'
import style from './resume.scss'

class Content extends Component {
	constructor(props){
		super(props);
	}
	render(){
		let {name,position,photo,introduction,skills,projects,experience,education,contact} = this.props.info;
		let lang = this.props.lang;

		let skillList = skills.map((item,index)=>{
			let progress,rest,full = ">>>>>>>>>>";
			let length = ~~(item.level/10);
			progress = full.substring(0,length);
			rest = full.substring(length,full.length);
			return (
				<div className={style.skill} key={index}>
					<h1 className={style.note}>{item.name}</h1>
					<p>{item.description}</p>
					<span className={style.progressBar} title={item.level+"%"}>
						<b>{progress}</b>{rest}
					</span>
				</div>
			)
		})

		let projectList = projects.map((item,index)=>{
			let descriptions = item.description.map((item,index)=><li key={index}>{item}</li>)
			let duties = item.duty.map((item,index)=><li key={index}>{item}</li>)
			return (
				<li key={index}>
					<h3>{item.name}</h3>
					<h4>前端开发<i>{item.duration[0]}{item.duration[1]!=null ? ` - ${item.duration[1]}` : ""}</i></h4>
					<h5>项目描述</h5>
					<ul>
						{descriptions}
					</ul>
					<h5>项目职责</h5>
					<ul>
						{duties}
					</ul>
				</li>
			)
		})

		let experienceList = experience.map((item,index)=>{
			return (
				<li key={index}>
					<h3>{item.company}</h3>
					<h4>{item.position}<i>{item.duration[0]} - {item.duration[1]}</i></h4>
					<p>{item.work}</p>
				</li>
			)
		})
		let educationList = education.map((item,index)=>{
			return (
				<li key={index}>
					<h3>{item.school}</h3>
					<h4>{item.degree}<i>{item.duration[0]} - {item.duration[1]}</i></h4>
				</li>
			)
		})
		return(
			<div className={style.content}>
				<div className={style.head}>
					<h1>{name}</h1>
					<h2>{position}</h2>
					<p>{introduction}</p>
					<div className={style.contact}>
						{contact.location}<br/>{contact.email} / {contact.cellPhone}
						<br/>
						<a href={contact.gitHub} target="_blank">{contact.gitHub}</a>
					</div>
				</div>
				<div className={style.main}>
					<section>
						<h1>{lang=="zh"? "工作经历" : "Experience"}</h1>
						<ul className={style.projectList}>
							{experienceList}
						</ul>
					</section>
					<section>
						<h1>{lang=="zh"? "项目介绍" : "Projects"}</h1>
						<ul className={style.projectList}>
							{projectList}
						</ul>
					</section>
					<section>
						<h1>{lang=="zh"? "技能" : "Skills"}</h1>
						{skillList}
					</section>
					<section>
						<h1>{lang=="zh"? "教育背景" : "Education"}</h1>
						<ul className={style.projectList}>
							{educationList}
						</ul>
					</section>
				</div>
			</div>
		)
	}
}

export default Content;