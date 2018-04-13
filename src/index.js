import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

import Moment from 'moment'

var created = Moment().format('MMMM Do YYYY, h:mm:ss a').toString()
var todos = [
				{
					text: "Learn React",
					completed: false,
					created: created,	
				},
				{
					text: "Learn Angular",
					completed: false,
					created: created,

				},
				{
					text: "Learn Vue",
					completed: false,
					created: created,

				},
			]


var storedTodos = localStorage.getItem('storedValues');

if(storedTodos){
	todos = JSON.parse(storedTodos);

}


ReactDOM.render(<App todos = {todos} />, document.getElementById('root'));
registerServiceWorker();
