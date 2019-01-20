<template>
	<div v-if='loading' class='loading-overlay'>
		<fa-layers class='fa-fw fa-4x'>
			<fa :icon='faStarChristmas'
				spin
			/>
			<fa :icon='faStarChristmas'
				transform='shrink-10' pulse class='fa-inverse'
			/>
		</fa-layers>
	</div>
</template>

<script>
import {faStarChristmas} from '@fortawesome/pro-solid-svg-icons'

export default {
	data: () => ({loading: false}),
	computed: {
		faStarChristmas: () => faStarChristmas
	},
	methods: {
		start() {this.loading = true},
		finish(){this.loading = false}
	}
}
</script>

<style scoped>
.loading-overlay {
	position: fixed;
	left: 0; right: 0;
	top: 0; bottom: 0;
	z-index: 10;
	background: rgba(255, 0, 0, .2);

	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
