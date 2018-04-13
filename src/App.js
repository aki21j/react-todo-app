import React from 'react';
import './App.css';

import Header from './components/header';
import SearchTodo from './components/searchTodo';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import TodoList from './components/todoList';
import Moment from 'moment'

export class App extends React.Component {
  constructor(props){
  	super();
  	this.state = {
  		todos: props.todos,
  	}
  	
	this.addTodo = this.addTodo.bind(this);
	this.removeTodo = this.removeTodo.bind(this);
	this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todoText){
  	let newTodos = this.state.todos;
  	// let newId = this.state.nextId;
  	newTodos.unshift({
  		text: todoText,
  		completed: false,
  		created: Moment().format('MMMM Do YYYY, h:mm:ss a').toString(),
  	});
  	this.setState({
  		todos: newTodos,
  		// nextId: ++newId,
  	});
  	this.updateLocalStorage(newTodos);
  }

  completeTodo(todoText){
  	let newTodos = this.state.todos;
  	let obj = newTodos.find(key => key.text === todoText);
  	newTodos.splice(newTodos.indexOf(obj),1);
  	newTodos.unshift({
  		text: todoText,
  		completed: !obj.completed,
  		created: Moment().format('MMMM Do YYYY, h:mm:ss a').toString(),
  	});
  	this.setState({
  		todos: newTodos,
  	});
  	this.updateLocalStorage(this.state.todos);

  }
  removeTodo(todoText){
  	let newTodos = this.state.todos;
  	let obj = newTodos.find(key => key.text === todoText);
  	newTodos.splice(newTodos.indexOf(obj),1);
  	this.setState({
  		todos: newTodos,
  	});
  	this.updateLocalStorage(this.state.todos);

  }

	updateLocalStorage(updatedTasks){
		console.log("Saved the tasks");
		localStorage.setItem('storedValues', JSON.stringify(updatedTasks));
	}

	resetTodos(){
		let newTodos = this.props.todos;
		newTodos.length = 0;
			this.setState({
	  		todos: newTodos,
	  	});
  	this.updateLocalStorage(this.state.todos);
		
	}

	searchTodo(searchText){
		let newTodos = this.props.todos;
		let x = newTodos.filter(function(search) {
        return search.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
    console.log(this.props.todos);	
    this.setState({
			todos: x,
		});		
	}

  render() {
    return (
      <div className="App row justify-content-md-center mx-0">
        <div className="todo-wrapper mx-0 p-0 col-md-4 col-sm-12">
	        <div className="head-container p-2">
	          <Header resetTodos = {this.resetTodos.bind(this)}/>
	          <SearchTodo searchTodo={this.searchTodo.bind(this)}/>        	
	        </div>

          <div className="list-container p-2">
	          <TodoList> 
	          	{
	          		this.state.todos.filter(todo => !todo.completed).map((todo,i) =>
	          			
		          			<TodoItem
		      					todo={todo} 
		      					key={i} 
		      					removeTodo = {this.removeTodo}
		      					completeTodo = {this.completeTodo}
		      					/>	          				

	      			)
	          	}
	          </TodoList>
	          <hr/>
	          <div className={"row " + (this.state.todos.filter(todo => todo.completed).length ? 'show' : 'hide')}>
	            <p className="font-weight-bold">Completed</p>
	          </div>
	          <TodoList> 
	          	{
	          		this.state.todos.filter(todo => todo.completed).map((todo,i) =>
		          			<TodoItem
		      					todo={todo} 
		      					key={i} 
		      					removeTodo = {this.removeTodo}
		      					completeTodo = {this.completeTodo}
		      					/>
	      			)
	          	}
	          </TodoList>
	        </div>
          <TodoInput todoText="" addTodo={this.addTodo}/>

        </div>
      </div>
    );
  }
}

// export default App;
// <ul>
//           	{
//           		this.state.todos.map((todo, i) => {
//           			return <TodoItem if={todo.completed === true}
//           					todo={todo} 
//           					key={i} 
//           					// id={todo.id}
//           					removeTodo = {this.removeTodo}
//           					completeTodo = {this.completeTodo}
//           					/>
//           		})
//           	}
//           </ul>	