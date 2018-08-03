import React, { Component }from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './js/home';
import Children from './js/children';

import './css/App.css';
export default class App extends Component {
	render(){
		return (
			<HashRouter>
				<Switch>
          <Route path="/home" component={Home} ></Route>
          <Route path="/children" component={Children}></Route>
          <Redirect from="/" to="/home" />
				</Switch>
			</HashRouter>
		)
	}
}
