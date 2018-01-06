<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;

class RolesController extends Controller
{

    public function __contruct()
    {
    	$this->middleware('auth');
    }

    public function index()
    {
    	$roles = Role::all();
    	return view('role.roles', compact('roles'));
    }

    public function show($id)
    {
    	$role = Role::find($id);
    	$users = $role->users;
    	return view('role.show', compact('role','users'));
    }

    // public function create()
    // {
    // 	return view('role.create');
    // }
}
