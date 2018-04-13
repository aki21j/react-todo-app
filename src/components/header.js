import React from 'react';

export default class Header extends React.Component{

	constructor(props){
		super();
	}

	resetTodos(){
		this.props.resetTodos();
	}
	render(){
		return(
			<div className="row">
				<p className="col-6 text-left font-weight-bold">The TODOS</p>
				<span 
					style={{
						fontSize: '14px'
					}}
					className="col-6 px-3 font-weight-bold text-right" 
					onClick={this.resetTodos.bind(this)}>Reset</span>
			</div>
		)
	}
}