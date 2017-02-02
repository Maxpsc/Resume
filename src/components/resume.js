import React, {Component,PropTypes} from 'react'
import ResumeHeader from './header.js'
import Sidebar from './sidebar.js'
import Content from './content.js'
import style from './resume.scss'

class Resume extends Component {
	static propTypes = {
		resumeInfo : PropTypes.shape({
			zh:PropTypes.shape({
				name:PropTypes.string.isRequired,
				position:PropTypes.string.isRequired,
				introduction:PropTypes.string.isRequired,
				skills:PropTypes.arrayOf(
					PropTypes.shape({
						name:PropTypes.string.isRequired,
						level:PropTypes.string.isRequired,
						description:PropTypes.string.isRequired
					})),
				projects:PropTypes.arrayOf(
					PropTypes.shape({
						name:PropTypes.string.isRequired,
						duration:PropTypes.arrayOf(PropTypes.string),
						description:PropTypes.arrayOf(PropTypes.string)
					})),
				experience:PropTypes.arrayOf(
					PropTypes.shape({
						company:PropTypes.string.isRequired,
						duration:PropTypes.arrayOf(PropTypes.string),
						position:PropTypes.string.isRequired,
						work:PropTypes.string.isRequired
					})),
				education:PropTypes.arrayOf(
					PropTypes.shape({
						school:PropTypes.string.isRequired,
						duration:PropTypes.arrayOf(PropTypes.string),
						degree:PropTypes.string.isRequired
					})),
				contact:PropTypes.shape({
					email:PropTypes.string.isRequired,
					qq:PropTypes.string,
					cellPhone:PropTypes.string,
					gitHub:PropTypes.string,
					location:PropTypes.string,
				})
			})
		})
	}
	static defaultProps = {

	}
	constructor(props){
		super(props);
		this.state = {
			lang:"zh",
			showTitle:""
		}
		this.switchLang = this.switchLang.bind(this);
	}
	switchLang(){
		let lang = (this.state.lang=="zh") ? "en" : "zh";
		this.setState({lang:lang});
	}
	render(){
		let info;
		if(this.state.lang=="zh"){
			info = this.props.resumeInfo.zh;
		}else{
			info = this.props.resumeInfo.en;
		}

		return(
			<div className={style.wrap}>
				{/*<ResumeHeader name={info.name} switchLang={this.switchLang} lang={this.state.lang}/>*/}
				<div className={style.resume}>
					<Content info={info} lang={this.state.lang} switchLang={this.switchLang}/> 
				</div>
			</div>
		)
		
	}
}

export default Resume;