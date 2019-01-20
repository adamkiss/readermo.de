/**
 * Page: content, things from api, DX functions
 */

export default class Page {
	constructor(data) {
		this.data = data
	}

	get title() {
		return this.data.title
	}

	get body() {
		return this.data.body
	}

	get excerpt() {
		return this.data.excerpt
	}

	get url() {
		return this.data.url
	}

	toJSON() {
		return JSON.stringify(this.data, null, 4)
	}
}
