<script>
	import {goto} from '@sapper/app'

	let url = ''

	const submitUrl = e => {
		e.preventDefault()
		if (!!url === false) return;

		return goto(`/${encodeURIComponent(url)}`)
	}
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<form>
	<input type="text" bind:value={url} placeholder="Gimme URL" />
	<button type="submit" on:click={submitUrl}>Go!</button>
</form>

<p>URL is <strong>{url || '---'}</strong></p>
