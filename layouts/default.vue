<template>
	<div :class='[appClass, stateClass, ...settingsClasses]'>
		<nuxt/>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	data() {
		return {
			appClass: 'app'
		}
	},
	computed: {
		...mapGetters({
			settingsClasses: 'settings/classObject'
		}),
		stateClass() {
			return `state--${this.$store.state.state}`
		}
	}
}
</script>
