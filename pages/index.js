import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.roles = ['Diablo 2 Bot Master', 'Marine Arena', 'Dry Pepper Style Chicken', 'KEKEKEKEKEK RUN CHICKEN MEN RUN']
	}

	render() {

		return (
			<BaseLayout className="cover" {...this.props.auth}>
				<div className="main-section">
					<div className="background-image">
						<img src="/images/background-index.png" />
					</div>

					<Container>
						<Row>
							<Col md="6">
								<div className="hero-section">
									<div className={`flipper`}>
										<div className="back">
											<div className="hero-section-content">
												<h2> Full Stack Web Developer </h2>
												<div className="hero-section-content-intro">
													Have a look at my portfolio and job history.
												</div>
											</div>
											<img className="image" src="/images/section-1.png"/>
											<div className="shadow-custom">
												<div className="shadow-inner"> </div>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md="6" className="hero-welcome-wrapper">
								<div className="hero-welcome-text">
									<h1>
										Welcome to the portfolio website of Julian Moon.
										Checkout my projects that I have been working on over the years!
									</h1>
								</div>
								<Typed
									loop
									typeSpeed={65}
									backSpeed={65}
									strings={this.roles}
									smartBackspace={false}
									shuffle={false}
									backDelay={1000}
									fadeOut={false}
									fadeOutDelay={100}
									loopCount={0}
									showCursor
									cursorChar="|"
									className="self-typed"
								/>
								<div className="hero-welcome-bio">
									<h1>
										Let's take a look on my work.
									</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</BaseLayout>
		)
	}
}


export default Index;
