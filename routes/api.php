<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api\EmploymentApplication')
	->middleware('auth:api')
	->group(function () {
	    // Controllers Within The "App\Http\Controllers\Api\EmploymentApplication" Namespace
		Route::post('/user/personal-information/', 'PersonalInformationController@store');
		Route::post('/user/work-history/', 'WorkHistoryController@store');
		Route::post('/user/certifications/', 'CertificationsController@store');
});

Route::namespace('Api\Profile')
	->middleware('auth:api')
	->group(function () {
		Route::put('user/personal-information/xactnet_address', 'ProfileController@xactnetAddress');
		Route::put('user/personal-information/phone', 'ProfileController@phone');
		Route::put('user/personal-information/email', 'ProfileController@email');
		Route::put('user/personal-information/address', 'ProfileController@address');
		Route::post('user/personal-information/license', 'ProfileController@license');
		Route::delete('user/personal-information/license/{id}', 'ProfileController@destroyLicense');
});

Route::namespace('Api\Acl')
	// ->middleware('auth:api')
	->group(function (){
		Route::get('users/all', 'UserAdministrationController@getAll');
		Route::get('user/{id}/roles', 'UserAdministrationController@getRoles');
		Route::put('user/{id}/roles', 'UserAdministrationController@syncRoles');
		Route::post('role','RolesController@create');
		Route::delete('role/{id}', 'RolesController@destroy');
});

Route::post('/user/search', function(Request $request){
	$query = $request->get('query');
	return App\User::with('roles')->where('name', 'like', "%$query%")->exclude('api_token')->get();
});