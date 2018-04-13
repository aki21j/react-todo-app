import React from 'react';
import './todoItem.css'

export default class TodoItem extends React.Component{
	constructor(props){
		super();
		this.removeTodo = this.removeTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);

	}

	removeTodo(e){
		var value = e.target.parentNode.querySelector('p.todo').innerText;
		this.props.removeTodo(value);
		console.log(value);

	}
	completeTodo(e){
		var value = e.target.parentNode.querySelector('p.todo').innerText;
		this.props.completeTodo(value);
		console.log(value);

	}

	render(){
		return(
			<div className = {"todo-lists row mx-0 " + (this.props.todo.completed ? 'complete' : 'incomplete')}>
				
				<p className="col-10 todo">{this.props.todo.text}</p>
				<i className="col-1 action-icon text-center fas fa-times" onClick={this.removeTodo}></i>
				<i className="col-1 action-icon text-center fas fa-check" onClick={this.completeTodo}></i>
				<br/>
				<span className="time col-10">{this.props.todo.created}</span>
			</div>
		)
	}
}