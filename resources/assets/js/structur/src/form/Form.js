import Errors from './Errors.js'

export default class Form {

	constructor(data) {
		this.originalData = data;

		for(let field in data) {
			this[field] = data[field];
		}

		this.errors = new Errors();

	}

	 /**
     * set data for form to post.
     */
	data() {
		let data = {};
        for (let property in this.originalData) {
            data[property] = this[property];
        }
		return data;
	}

	 /**
     * Reset the form fields and clear any errors.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

	get(field) {
		return this.errors[field][0];
	}

	/**
     * send a post request to a given url.
     */
	post(url, reset=true) {
		return this.submit('post', url, reset);
	}

	/**
     * send a put request to a given url.
     */
	put(url, reset=true) {
		return this.submit('put', url, reset);
	}

	/**
     * send a patch request to a given url.
     */
	patch(url) {
		return this.submit('patch', url);
	}

	/**
     * send a put request to a given url.
     */
	delete(url) {
		return this.submit('delete', url);
	}

	/**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url, reset = true) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data, reset);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data.errors);
                    reject(error.response.data.errors); 
                });
        });
	}

	 /**
     * Handle a successful form submission.
     *
     * @param {object, var} data, reset
     */
    onSuccess(data, reset) {
        if(reset == true){
            this.reset();
        }
        return;        
    }


    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
    }

}