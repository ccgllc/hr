<?php

// use Laravel\Socialite\Facades\Socialite;

Route::get('/mailable', function () {
    $user = App\User::find(107);
    return new App\Mail\AccountVerification($user);
});

// Route::get('/file', function(){
// 	// dd(Storage::url('hr/user_documents/file.docx'));
// 	$file = '../storage/hr/user_documents/Brandon Hamm1/Brandon Hamm.docx';
// 	return response()->download($file, 'Brandon Hamm.docx', ['Content-Type: application/pdf']);
// });

// Route::get('/test', function(Request $request){
// 	$request->user()->update(['applied' => 1]);
// 	return $request->user();
// });

Route::get('/', function () {
    return redirect('register');
});

Route::get('oauth/login', function(){
	return Socialite::driver('facebook')->redirect();
});

Route::get('oauth', function(){
	$user = Socialite::driver('facebook')->user();
	dd($user);
});

route::get('apply', function(Illuminate\Http\Request $request){
	$user = $request->user();
	$user->token = $user->api_token;
	if($user->applied) {
		return redirect('/profile');
	}
	return view('apply', compact('user'));//->withCookie($cookie);
})->middleware('auth');

Route::get('/dashboard', 'DashboardController@show');

Route::resource('users', 'UsersController');
// Route::get('users/{status}', 'UsersController@status');
Route::resource('users/{id}/documents', 'UserDocumentsController');
Route::resource('users/{id}/roles', 'UserRolesController');
Route::get('users/verify/{token}', 'UsersController@verifyAccount');


Route::resource('roles', 'RolesController');

Auth::routes();

Route::get('/profile', 'ProfileController@index')->name('profile');
Route::get('/profile/{id}', 'ProfileController@show');
Route::get('/home', 'HomeController@index')->name('home');
