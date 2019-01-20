/**
 * Parse url into object and return extend URL class with formatting and rules
 */

export default class Url extends URL {
	log() {
		// URL.toJSON() formats this back to string.
		// Simplest way to debug/test this is custom fx
		console.log(this)
	}

	getFormattedHtml() {
		return this.toString()
			.replace(this.host, `<span class='host' style='font-weight: bold'>${this.host}</span>`)
			.replace(`${this.protocol}//`, '')
	}
}
