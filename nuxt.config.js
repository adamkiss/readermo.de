const pkg = require('./package')

module.exports = {
	mode: 'spa',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: '~/components/loading.vue',

	/*
	** Global CSS
	*/
	css: ['~/css/style.sass'],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// '@nuxtjs/pwa', turned off: waiting for new version of https://github.com/nuxt-community/pwa-module
		['nuxt-fontawesome', {component: 'fa'}]
	],

	/*
	** Axios module configuration
	*/
	axios: {},

	/*
	** Build configuration
	*/
	build: {
		extractCSS: true
	}
}
