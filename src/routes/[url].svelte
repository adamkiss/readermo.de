<script context='module'>
	export async function preload({ params }) {
		try {
			// get & validate URL
			const url = new URL(decodeURI(params.url))

			// get parsed content of URL
			const response = await this.fetch('/.netlify/functions/mercury', {
				method: 'POST',
				headers: { Accept: "application/json" },
				body: JSON.stringify({ url })
			})
			const result = await response.json()

			return {url, result}
		} catch (e) {
			console.error(e)
			return this.error(400, e.message)
		}
	}
</script>

<script>
	export let url
	export let result
</script>

<svelte:head>
	<title>URL: {url}</title>
</svelte:head>

<pre>{JSON.stringify(result, null, 4)}</pre>
