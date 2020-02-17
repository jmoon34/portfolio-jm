import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class CV extends React.Component{
	render(){
		return(
			<BaseLayout>
				<BasePage>
					<h1>This is my CV</h1>
				</BasePage>
			</BaseLayout>
		)
	}
}

export default CV
