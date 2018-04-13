import React from 'react';
import './todoInput.css';


export default class TodoInput extends React.Component{
	constructor(props){
		super();

		this.state = {
			value: ""
		}

		this.handleChange= this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);

	}

	handleChange(e){
		this.setState({
				value: e.target.value,
			});
	}

	addTodo(todo){
		console.log("TODO:", todo);
		if(todo.length > 0){
			this.props.addTodo(todo);
			this.setState({
				value: '',
			});
		}
	}
	handleKeypress(event){
		if(event.key === 'Enter'){
			this.addTodo(this.state.value);
		}
	}

	render(){
		return(
			<div className="row input-row head-container p-2 mx-0" onKeyPress={this.handleKeypress.bind(this)}>
				<div className="form-group input-group col-9">
					<input className="form-control" placeholder="Add Todo" type="text" value={this.state.value} onChange={this.handleChange } />
				</div>
				<div className="col-2 text-right ">
					<button 
						className = "btn btn-danger mx-2" 
						onClick={() => this.addTodo(this.state.value)}>
						+
					</button>
				</div>

			</div>
		)
	}
}