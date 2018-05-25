
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// try {
//     window.$ = window.jQuery = require('jquery');

//     require('bootstrap-sass');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');
let api_token = window.localStorage.token;

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}
else {
    console.error('CSRF token not found');
}

if(api_token) 
{
	window.axios.defaults.headers.common['Authorization'] = "Bearer " + api_token;
} 
else {
	if (! window.location === '/login#')
	{
		let prev = window.location;
		console.error('You need to login.');
	    window.axios.post('/logout').then(response => {
	    	window.location = prev;
	    })
	}
    
}

let originalFunction = console.error;
console.error = function() {
  let args = Array.prototype.slice.call(arguments);
  if(args[0]) {
  	window.axios.post('/api/admin/client-error', args[0].response).then(response => {
  		if(args[0].response.status != 422) {
  			alert('Unfortunately we detected an issue with this request, We\'ve forwarded a copy of the error to our development team for investigation. If you continue to need help, please contact us at support@claimconsultantgroup.com');
  		}
  	});
}
  // let error = {};
  // error.message = args[0].reponse.data;
  // alert(args[0].response.data.errors.value[0]);
  if (args[0].response.status == 401) {
  	window.axios.post('/logout').then(response => {
	    window.location = '/login';
 	})
  };
  // alert(args);
  // window.axios.post('/')
  return originalFunction.apply(console, args);
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
