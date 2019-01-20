<template>
	<div class="container">
		<div class="error-state">
			<h1>Error</h1>
			<pre>{{ error.message }}</pre>
		</div>
		<nuxt-link to="/">Home page</nuxt-link>
	</div>
</template>

<script>
export default {
	props: ['error']
}
</script>


<style>

</style>
