<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateDocument as Validate;
use App\User;
use Illuminate\Http\Request;

class UserDocumentsController extends Controller {

	public function store(Validate $request, $id)
	{
		$user = User::findOrFail($id);
		$request->createDocument($user);
	}

	public function destroy(Request $request, $id)
	{
		
	}

}