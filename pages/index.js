import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

class Index extends SuperComponent{

	static async getInitialProps() {
		let userData = {};
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			userData = response.data;
		} catch(err){
			console.error(err)
		}

		return {initialData: [1,2,3,4], userData}; // equivalent to userData: userData
	}

	constructor() {
		super();

		this.state ={
			title: 'I am Index Page'
		}
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	updateTitle = () => {
		this.setState({title: 'yolo'});
	}

	render() {
		debugger;
		const { title } = this.state;
		const { userData, initialData } = this.props;
		return (
			<BaseLayout>
				<h1>{ this.state.title }</h1>
				<h1>{ userData.title }</h1>
				<button onClick={this.updateTitle}>Change Title</button>
			</BaseLayout>
		)
	}
}


export default Index;


//<Header title={'yolo'}>
//	<h1>I am header subtitle</h1>
//</Header>
