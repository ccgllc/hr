<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateUserWorkHistory as Validate;
use App\User;
use Illuminate\Http\Request;

class UserWorkHistoriesController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function store(Validate $request, $id)
	{
		$request->merge(['user_id' => $id]);
		$user = User::findOrFail($id);
		return $request->updateWorkHistory($user);
	}

	public function destroy(Request $request, $id)
	{
		return \App\WorkHistory::destroy($id);
	}

}