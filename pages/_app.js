import React from 'react';
import App from 'next/app';

import auth0 from '../services/auth0';
// Stylings, order determines priority!
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

		const auth = { isAuthenticated };

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps, auth }
	}

	render() {
		const { Component, pageProps, auth } = this.props

		return <Component {...pageProps} auth={auth}/>
	}
}
