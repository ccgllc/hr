<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;

class UserRolesController extends Controller
{
    public function __contruct()
    {
    	$this->middleware('auth');
    	$this->middleware('dashboard');
    }

    public function index($id)
    {
    	$user = User::findOrFail($id);
    	$roles = Role::all();
    	return view('user.roles', compact('user', 'roles'));
    }
}
