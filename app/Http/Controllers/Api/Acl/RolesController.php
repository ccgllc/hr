<?php

namespace App\Http\Controllers\Api\Acl;

use App\Http\Controllers\Controller;
use App\Role;
use Illuminate\Http\Request;

class RolesController extends Controller
{
	public function create(Request $request)
	{
		$validatedData = $request->validate([
	        'name' => 'required|unique:roles|max:255',
	        'label' => 'required|unique:roles|max:255',
    	]);

		return Role::create($validatedData);
	}

	public function destroy($id)
	{
		return Role::destroy($id);
	}
}