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
		Route::patch('user/{id}/status', 'ProfileController@status');
		Route::patch('user/{id}/referral', 'ProfileController@referral');
		Route::put('user/{id}/xactnet_address', 'ProfileController@xactnetAddress');
		Route::put('user/{id}/phone', 'ProfileController@phone');
		Route::put('user/{id}/email', 'ProfileController@email');
		Route::put('user/{id}/address', 'ProfileController@address');
		Route::post('user/{id}/license', 'ProfileController@license');
		Route::delete('user/{id}/license/{licenseId}', 'ProfileController@destroyLicense');
		Route::post('user/{id}/avatar/', 'ProfileController@createAvatar');
		Route::delete('user/avatar/{id}', 'ProfileController@destroyAvatar');
		Route::post('user/{id}/documents', 'UserDocumentsController@store');
		Route::delete('user/documents/{id}', 'UserDocumentsController@destroy');
		Route::post('user/{id}/certifications', 'UserCertificationsController@store');
		Route::delete('user/certifications/{id}', 'UserCertificationsController@destroy');
		Route::post('user/{id}/software-experiences', 'UserSoftwareExperiencesController@store');
		Route::post('user/{id}/work-history', 'UserWorkHistoriesController@store');
		Route::delete('user/software-experiences/{id}', 'UserSoftwareExperiencesController@destroy');
});

Route::namespace('Api\Acl')
	->middleware('auth:api')
	->group(function (){
		Route::get('users/all', 'UserAdministrationController@getAll');
		Route::post('users', 'UserAdministrationController@destroyUsers');
		Route::delete('users/{id}', 'UserAdministrationController@destroy');
		Route::get('user/{id}/roles', 'UserAdministrationController@getRoles');
		Route::put('user/{id}/roles', 'UserAdministrationController@syncRoles');
		Route::post('role','RolesController@create');
		Route::delete('role/{id}', 'RolesController@destroy');
});

Route::post('/admin/client-error', function(Request $request){
	Log::error($request->all());
	return response('success', 200);
});

Route::post('/user/search', function(Request $request){
	$query = $request->get('query');
	return App\User::with('roles')->where('name', 'like', "%$query%")->exclude('api_token')->get();
});