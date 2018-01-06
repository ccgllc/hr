import axios from 'axios';

export default class Resource {
	constructor(config) {
		this.config = config;
	}

	get(endpoint) {
		return this.request('get', endpoint);
	}

	put(endpoint, data) {
		this.config.data = data;
		return this.request('put', endpoint);
	}

	delete(endpoint) {
		return this.request('delete', endpoint);
	}

	getData() {
		if (this.config.data != undefined) {
			return this.config.data;
		}
	}

	request(method, endpoint) {
		return new Promise((resolve, reject) => {
			axios[method](this.getFullUri() + endpoint, this.getData())
				.then(response => { 
					// this.onSuccess(response.data);
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data.errors);
				})
		});	
	}

	getFullUri() {
		return this.getPrefix() + this.getResource() + this.getParams();
	}

	getPrefix() {
		return this.config.uri.prefix != '' 
			? '/' + this.config.uri.prefix + '/' 
			: '';
	}

	getResource() {
		return this.config.uri.resource != '' 
			? this.config.uri.resource + '/' 
			: ''; //throw 'you must provide a resource.';
	}

	getParams() {
		return this.config.uri.params.length > 0 
			? this.config.uri.params[0].id + '/' 
			: '';
	}

	onSuccess(data) {
		return data;
	}
}