import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component{

	constructor(props) {
		super(props);
		
		this.someVariable = 'Some var';
	}
	
	alertName(title){
		alert(title);
	}
	render() {
		return(
			<BaseLayout>
				<h1>These are my blogs</h1>
			</BaseLayout>
		)
	}
}

export default SuperComponent;
