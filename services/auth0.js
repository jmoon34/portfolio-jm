import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0 {
	constructor(){
		this.auth0 = new auth0.WebAuth({
			domain: 'dev-rwas-e89.auth0.com',
			clientID: 'gcXHiemTuJjSEnKJVZ5b72IU8lbI2sSF',
			redirectUri: 'http://localhost:3000/callback',
			responseType: 'token id_token',
			scope: 'openid profile'
		});
	}

	handleAuthentication = () => {
		return new Promise((resolve, reject) => {
			this.auth0.parseHash((err, authResult) => {
				if (authResult && authResult.accessToken && authResult.idToken) {
					this.setSession(authResult);
					resolve();
				} else if (err) {
					reject(err)
					console.log(err);
				}
			});
		})
	}

	setSession(authResult) {
		// Set the time that the Access Token will expire at
		const expiresAt = JSON.stringify((authResult.expiresIn * 1000) * new Date().getTime());
		//localStorage.setItem('access_token', authResult.accessToken);
		Cookies.set('user', authResult.idTokenPayload);
		Cookies.set('jwt', authResult.idToken);
		Cookies.set('expiresAt', expiresAt);
	}

	logout = () =>{
		Cookies.remove('user');
		Cookies.remove('jwt');
		Cookies.remove('expiresAt');

		this.auth0.logout({
			returnTo: '',
			clientID: 'gcXHiemTuJjSEnKJVZ5b72IU8lbI2sSF'
		})
	}

	login = () => {
		this.auth0.authorize();
	}

	isAuthenticated = () => {
		const expiresAt = Cookies.getJSON('expiresAt');
		return new Date().getTime() < expiresAt;
	}

	clientAuth = () => {
		return this.isAuthenticated();
	}

	serverAuth = (req) => {
		if (req.headers.cookie) {
			const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='));
			if (!expiresAtCookie) { return undefined };

			const expiresAt = expiresAtCookie.split('=')[1];
			return new Date().getTime() < expiresAt;
		}
	}


}

const auth0Client = new Auth0();

export default auth0Client;
