<script>
	export let waat;
</script>

<script context="module">
	export async function preload({ params }) {
		return {waat: params}
    }
    
    export async function render() {
        return '<b>SERVER</b>'
    }
</script>

<pre>
    {JSON.stringify(waat)}
</pre>