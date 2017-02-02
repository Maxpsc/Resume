import React, {Component,PropTypes} from 'react'

class ResumeHeader extends Component {
	constructor(props){
		super(props);
		this.state = {
			show:false
		}
		this.switchShow =this.switchShow.bind(this);
	}
	switchShow(){
		let show = this.state.show;
		show = !show;
		this.setState({show:show});
	}
	render(){
		const zh = (this.props.lang=="zh");

		return(
			<header className={this.state.show ? "show" : "hide"}>
				<h1>
					{this.props.name}
					{zh ? "的简历" : "'s resume"}
				</h1>
				<a href="javascript:;" onClick={this.props.switchLang} className="lang-btn">{this.props.lang}</a>
				<a href="javascript:;" onClick={this.switchShow} className="hide-btn"></a>
			</header>
		)
	}
}

export default ResumeHeader;