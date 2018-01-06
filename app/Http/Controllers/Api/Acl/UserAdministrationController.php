<?php

namespace App\Http\Controllers\Api\Acl;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserAdministrationController extends Controller
{
    public function getAll()
    {
    	return \App\User::exclude('api_token')->get();
    }

    public function getRoles($id)
    {
    	return \App\User::with('roles')->whereId($id)->firstOrFail();
    }

    public function syncRoles(Request $request, $id)
    {
    	$user = \App\User::findOrFail($id);
    	// dd($request->all());
    	$user->roles()->sync($request->all());
    	return $user->roles->toJson();
    }
}
