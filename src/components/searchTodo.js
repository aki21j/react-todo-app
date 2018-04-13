import React from 'react';
import './searchTodo.css'

export default class SearchTodo extends React.Component{

	constructor(props){
		super();
	}

	handleChange(e){
		let searchText = e.target.value;
		this.props.searchTodo(searchText);
	}
	render(){
		return(
			<div className="search-row px-2">
				<div className="form-group search-group row mx-0">
					<input 
						className="form-control col-10" 
						type="text"
						placeholder="Enter search keyword" 
						onChange={this.handleChange.bind(this) } />
						<i className="fas fa-search col-2 p-2"></i>
				</div>
				
			</div>
		)
	}
}