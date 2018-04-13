import React from 'react';

export default class TodoList extends React.Component{
	constructor(props){
		super();
	}



	render(){
		return(
			<div className="todoList">
				{this.props.children}
			</div>
		)
	}
}