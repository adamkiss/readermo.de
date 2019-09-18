/* eslint-disable */
const Mercury = require('@postlight/mercury-parser')

exports.handler = async function(event, context) {
	try {
		if (event.httpMethod === 'OPTIONS') return {statusCode: 204}
		if (event.httpMethod !== 'POST') return {statusCode: 405, body: "Method not allowed"}

		const {url} = JSON.parse(event.body)
		const result = await Mercury.parse(url);

		console.log(`Returning '${result.title}'`)

		return {
			statusCode: 200,
			body: JSON.stringify(result)
		};
	} catch (err) {
		console.log(err); // output to netlify function log

		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
		};
	}
};
