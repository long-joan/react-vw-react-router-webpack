import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import './css/App.css';
const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./js/home'),
  loading: Loading,
});

const Children = Loadable({
  loader: () => import('./js/children'),
  loading: Loading,
});

export const App = () => (
	<Router>
		<Switch>
			<Route exact path="/home" component={Home} ></Route>
			<Route path="/children" component={Children}></Route>
			<Redirect to='home'/>
		</Switch>
	</Router>
  );
