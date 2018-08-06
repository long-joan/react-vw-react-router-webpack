import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/home';
import Children from './js/children';

import './css/App.css';
export default class App extends Component {
	render(){
		return (
			<Router>
				<Switch>
					<Route exact path="/home" component={Home} ></Route>
					<Route path="/children" component={Children}></Route>
				</Switch>
			</Router>
		)
	}
}
