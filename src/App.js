import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './component/Loading';
import './css/App.css';
const Loading_dom = () => <Loading/>;

const Home = Loadable({
  loader: () => import('./js/home'),
  loading: Loading_dom,
});

const Children = Loadable({
  loader: () => import('./js/children'),
  loading: Loading_dom,
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
