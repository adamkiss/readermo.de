<template>
	<section class="container blurrable">
		<div>
			<logo/>
			<h1 class="title">
				<fa :icon='faCoffee' />
				readermo.de
			</h1>
			<h2 class="subtitle">
				Use reader mode, on any page, any time.
			</h2>
			<input v-model='url' type='url' />
			<button @click="submit">Readmo.de this</button>
			<hr>
			<button>Paste from clipboard and go (@todo)</button>
			<hr>
			<p><nuxt-link to='/about/'>About</nuxt-link> • <nuxt-link to='/settings/'>Settings</nuxt-link></p>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import isUrl from 'is-url'

import Logo from '~/components/Logo.vue'
import {faCoffee} from '@fortawesome/pro-solid-svg-icons'

export default {
	components: {Logo},
	data: () => ({
		url: null
	}),
	computed: {
		...mapGetters(['is']),
		faCoffee: () => faCoffee
	},
	methods: {
		...mapActions(['setState', 'setUrl']),
		shakeInput() {

		},
		submit() {
			if (!this.url || !isUrl(this.url))
				return this.shakeInput()

			this.$router.push({
				path: encodeURIComponent(this.url)
			})
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.setUrl({url: '/'})
			this.setState({state: 'welcome'})
		})

	}
}
</script>

<style>
.fa-coffee path {
	color: red;
}

.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
