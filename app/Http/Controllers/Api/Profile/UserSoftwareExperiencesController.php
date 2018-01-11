<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateUserSoftwareExperience as Validate;
use App\User;
use Illuminate\Http\Request;

class UserSoftwareExperiencesController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function store(Validate $request, $id)
	{
		$request->merge(['user_id' => $id]);
		$user = User::findOrFail($id);
		return $request->createSoftwareExperience($user);
	}

	public function destroy(Request $request, $id)
	{
		return \App\SoftwareExperience::destroy($id);
	}

}