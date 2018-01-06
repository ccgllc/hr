import Form from './Form';
export default class FormWithFiles extends Form {
	constructor(data) {
		super(data);
	}
	data() {
		let data = new FormData();
		for (let property in this.originalData) {
            // if prop is file we need to append it,
            if (this[property] instanceof File) {
                data.append(property, this[property], this[property.name]);
            }
            // if prop is an array we need to filter and append it to data
            // otherwise just append copy of current string/object reference.
            else {
            	this[property] instanceof Array 
            		?  this[property].filter(prop => data.append(property + '[]', prop))
            		:  data.append(property, this[property]);
            }
		}
		return data;
	}
}