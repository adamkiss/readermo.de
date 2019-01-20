<template>
	<section class="container blurrable">
		<nuxt-link to='/'>Back to home</nuxt-link>
		<h1>{{ currentPage.title }}</h1>
		<Reader :url="url"/>
	</section>
</template>

<script>
import Reader from '@/components/Reader'
import {mapGetters, mapActions} from 'vuex'

export default {
	components: {Reader},
	computed: {
		...mapGetters({is: 'is', getPage: 'pages/get'}),
		currentPage() {
			return this.getPage(this.$store.state.url)
		}
	},
	async asyncData ({store, params, error}) {
		const url = decodeURIComponent(params.pathMatch)
		await store.dispatch('pages/load', {url})

		if (store.getters.is('error')) {
			return error(store.error)
		}
	}
}
</script>
