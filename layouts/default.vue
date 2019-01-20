<template>
	<nuxt/>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	head() {
		return {
			bodyAttrs: {
				class: [this.stateClass, ...this.settingsClasses].join(' ')
			}
		}
	},
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
