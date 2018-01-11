import Form from '../structur/src/form/Form';
import FormWithFiles from '../structur/src/form/FormWithFiles';
// import personalData from './personalInfo';
// import workHistoryData from './workHistory';
import states from './states';
import months from './months';
import experience from './experience';

export default {
	text: {
		title: "",
		subtitle: ""
	},
	personalInfo: new Form({
		street: '',
		city: '',
		state: '',
		zip: '',
		phone: '',
		license_state: '',
		license_number: '',
		expiration_month: '',
		expiration_year: '',
		xactnet_address: '',
	}),
	workHistory: new Form({
		desk_experience: 0,
		residential_experience: 0,
		residential_claims: 0,
		residential_cat_experience: 0,
		residential_cat_claims: 0,
		commercial_experience: 0,
		commercial_claims: 0,
		commercial_cat_experience: 0,
		commercial_cat_claims: 0,
		large_loss_experience: 0,
		large_loss_claims: 0,
		large_loss_cat_experience: 0,
		large_loss_cat_claims: 0,
		auto_experience: 0,
		auto_claims: 0,
		inland_marine_experience: 0,
		inland_marine_claims: 0,
		casualty_experience: 0,
		casualty_claims: 0,
		environmental_experience: 0,
		environmental_claims: 0,
		flood_experience: 0,
		flood_claims: 0,
		earthquake_experience: 0,
		earthquake_claims: 0,
	}),
	certifications: new FormWithFiles({
		certifications: [],
		software: [],
		resume: {}
	}),
	// resume: new FormData(),
	experience: experience.years,
	claims: experience.claims,
	progress: 0,
	states: states,
	months: months
}