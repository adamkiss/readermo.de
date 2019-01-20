export const state = () => ({
	state: 'loading',
	url: null,
	error: null
})

export const getters = {
	is: state => (checkFor = null) => checkFor ? (state.state === checkFor) : state.state,
	hasError: state => Boolean(state.error),
	getError: state => (prop = null) => prop ? state.error[prop] : JSON.stringify(state.error, null, 4)
}

export const mutations = {
	setState(state, payload) {
		if ('$nuxt' in this)
			if (state.state !== 'loading' && payload.state === 'loading')
				this.$nuxt.$loading.start()
			else if (state.state === 'loading' && payload.state !== 'loading')
				this.$nuxt.$loading.finish()

		state.state = payload.state
	},
	setUrl(state, {url}) {
		state.url = url
	},
	setError(state, payload) {
		state.state = 'error'
		state.error = payload.error
	}
}

export const actions = {
	setState: ({commit}, payload) => commit('setState', payload),
	setUrl: ({commit}, payload) => commit('setUrl', payload),
	setError: ({commit}, payload) => {
		commit('setError', payload)
	}
}
