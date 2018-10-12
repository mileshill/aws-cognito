import React, { Component } from 'react';
import { PageHeader, ListGroup } from 'react-bootstrap';
import { API } from 'aws-amplify';
import './Home.css';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			testApiCall: []
		}
	}

	async componentDidMount(){
		console.log('did mount');
		console.log(this.props.isAuthenticated);
		if(!this.props.isAuthenticated){
			return;
		}

		try{
			const testApiCall = await this.testApiCall();
			console.log('testApiCall', testApiCall);
			this.setState({ testApiCall })
		} catch(e){
			console.error(e);
		}
		this.setState({isLoading: false});
	}

	testApiCall(){
		// Must match route in aws-amplify config (index.js)
		return API.get('testApiCall', '/hello');
	}

	renderTestApi(testApiCall){
		console.log(testApiCall);
		return testApiCall.message;
	}

	renderLander() {
		return (
			<div className="lander">
				<h1>Test web app</h1>
				<p>A simple react test app</p>
			</div>
		);
	}

	renderTest() {
		return (
			<div className="test">
				<PageHeader>Test API call</PageHeader>
				<ListGroup>{!this.state.isLoading && this.renderTestApi(this.state.testApiCall)}</ListGroup>
			</div>
		);
	}

	render() {
		return <div className="Home">{this.props.isAuthenticated ? this.renderTest() : this.renderLander()}</div>;
	}
}
