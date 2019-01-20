<template>
	<section class="container blurrable">
		<Header />
		<Reader />
		<Footer />
	</section>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reader from '@/components/Reader'
import {mapGetters, mapActions} from 'vuex'

export default {
	components: {Header, Footer, Reader},
	async asyncData ({store, params, error}) {
		const url = decodeURIComponent(params.pathMatch)
		await store.dispatch('pages/load', {url})

		if (store.getters.is('error')) {
			return error(store.error)
		}
	}
}
</script>
