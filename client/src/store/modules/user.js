export default {
	state: {
		user: null,
	},
	getters: {
		getUser({ user }) {
			return user;
		}
	},
	mutations: {
		setUser(state, user) {
			state.user = user
			
			localStorage.setItem('user', JSON.stringify(state.user));
		},
		logout(state) {
			state.user = null;
			localStorage.removeItem('user');
		}
	}
}
