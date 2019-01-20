<template>
	<section class="container blurrable">
		<nuxt-link to='/'>Back to home</nuxt-link>
		<h1>{{ currentPage.title }}</h1>
		<div ref="pageBody" v-html="currentPage.body" />
	</section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

const isLink = el => (el.nodeName === 'A' && 'href' in el && el.href)

export default {
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
	},
	mounted() {
		this.$refs.pageBody.addEventListener('click', e => {
			if (!isLink(e.target))
				return true

			e.preventDefault();
			this.$router.push({
				path: encodeURIComponent(e.target.href)
			})
		}, {capture: true, once: true})

	}
}
</script>
