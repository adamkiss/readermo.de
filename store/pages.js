/* global process */

import Url from '../src/url'

const apiUrl = process.env.NODE_ENV === 'development' ?
	'http://lapi.readmo.de.localhost/' :
	'https://api.readmo.de/'

const dispatchError = function (dispatchFunc, error) {
	return dispatchFunc('setError', {error}, {root: true})
}

const loadPage = async function ({url, nuxt, dispatch}) {
	try {
		const {data: {page}} = await nuxt.$axios.post(apiUrl, {url})
		page.url = new Url(url)
		return page
	} catch (error) {
		// Let's try to dispatch most meaningful error
		if ('response' in error)
			if ('data' in error.response && 'error' in error.response.data)
				return dispatchError(dispatch, error.response.data.error)
			else
				return dispatchError(dispatch, error.response)
		if ('request' in error)
			return dispatchError(dispatch, error.request)
		return dispatchError(dispatch, error)
	}
}

export const state = () => ({
	cache: {}
})

export const getters = {
	has: state => url => url in state.cache,
	get: state => url => {
		return url in state.cache ? state.cache[url] : null
	}
}

export const mutations = {
	add(state, {url, page}) {
		state.cache[url] = page
	}
}

export const actions = {
	async load({getters: pages, commit, dispatch}, {url}) {
		commit('setState', {state: 'loading'}, {root: true})

		if (!pages.has(url)) {
			const page = await loadPage({url, nuxt: this, dispatch})
			commit('add', {url, page})
		}

		commit('setUrl', {url}, {root: true})
		commit('setState', {state: 'reading'}, {root: true})
		return true
	}
}
