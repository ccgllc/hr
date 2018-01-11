<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateUserCertification as Validate;
use App\User;
use Illuminate\Http\Request;

class UserCertificationsController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function store(Validate $request, $id)
	{
		$request->merge(['user_id' => $id]);
		$user = User::findOrFail($id);
		return $request->createCertification($user);
	}

	public function destroy(Request $request, $id)
	{
		return \App\Certification::destroy($id);
	}

}