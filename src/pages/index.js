import React from 'react';
import { Navbar, Footer } from '../component';
import { saveToDB } from '../services';

export default class App extends React.Component {
	componentDidMount() {
		saveToDB('new user');
	}
	render() {
		return <div>this is navbar!</div>;
	}
}
