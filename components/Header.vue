<template>
	<div id="header">
		<nuxt-link to='/'>Back to home</nuxt-link>
		<h1>{{ page.title }}</h1>
		<p v-html="page.url.getFormattedHtml()"></p>
		<pre>{{ page.toJSON() }}</pre>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({getPage: 'pages/get'}),
		page() {
			return this.getPage(this.$store.state.url)
		}
	}
}
</script>

<style>

</style>
