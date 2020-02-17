// import React from 'react';
// import Link from 'next/link';
// import {Link as NextLink} from '../../routes';
// 
// class Header extends React.Component {
// 
// 	render(){
// 		return(
// 			<React.Fragment>
// 				<Link href="/">
// 					<a style={{'fontSize': '20px'}}>Home </a>
// 				</Link>
// 
// 				<Link href="/about">
// 					<a> About </a>
// 				</Link>
// 
// 				<Link href="/portfolios">
// 					<a> Portfolios </a>
// 				</Link>
// 				
// 				<Link href="/blogs">
// 					<a> Blogs </a>
// 				</Link>
// 
// 				<Link href="/cv">
// 					<a> CV </a>
// 				</Link>
// 
// 					<NextLink route='test' params={{id: '2'}}>
// 						<a> Test 2 </a>
// 					</NextLink>
// 					<NextLink route='/test/5'>
// 						<a> Test 5 </a>
// 					</NextLink>
// 
// 				<style jsx>
// 					{
// 						`
// 						a{
// 							font-size: 20px;
// 						};
// 
// 						.customClass {
// 							color: red;
// 						}
// 						`
// 					}
// 				</style>
// 			</React.Fragment>
// 		)
// 	}
// }
// 
// export default Header;
//

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


const BsNavLink = (props) => {
	const { route, title } = props;
	return (
		<Link href={route}>
			<a className="nav-link port-navbar-link"> {title} </a>
		</Link>
	)
}


export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar className="port-navbar port-nav-base absolute"color="transparent" dark expand="md">
					<NavbarBrand className="port-navbar-brand" href="/">Julian Moon</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/" title="Home" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/about" title="About" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/portfolios" title="Portfolios" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/cv" title="CV" />
							</NavItem>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
