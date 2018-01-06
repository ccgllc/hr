import Resource from '../structur/src/services/Resource';
export default class UserService{

	constructor(config) {
		// super(config);
		this.Resource = new Resource(config);
	}

}