<template>
	<div ref="body" v-html="page.body" />
</template>

<script>
import {mapGetters} from 'vuex'

const isLink = el => (el.nodeName === 'A' && 'href' in el && el.href)

export default {
	props: ['url'],
	computed: {
		...mapGetters({getPage: 'pages/get'}),
		page() {
			return this.getPage(this.$store.state.url)
		}
	},
	mounted() {
		this.$refs.body.addEventListener('click', e => {
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

<style>

</style>
