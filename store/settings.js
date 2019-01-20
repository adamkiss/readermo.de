const allowedSettings = {
	theme: ['light', 'sepia', 'cool', 'dark'],
	spacing: ['tight', 'normal', 'loose', 'extra-loose'],
	margins: ['narrow', 'normal', 'wide', 'extra-wide']
}

export const state = () => ({
	theme: 'dark', // light, sepia, cool, dark
	spacing: 'normal', // tight, normal, loose, extra-loose
	margins: 'normal' // narrow, normal, wide, extra-wide
})

export const getters = {
	classObject: state => Object.keys(state).map(k => `setting--${k}-${state[k]}`)
}

export const mutations = {
	setSetting(state, {setting, value}) {
		if (!allowedSettings[setting].includes(value)) return

		state.setting = value
	}
}

export const actions = {
	setSetting({commit}, {setting, value}) {
		commit('setSetting', {setting, value})
	}
}
