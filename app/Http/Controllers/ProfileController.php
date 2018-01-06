<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{

	public function __construct()
	{
		$this->middleware('auth');
	}
    
	public function index()
	{
		$user = Auth::user();
		$user->load(['roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications']);
		$user->role = $this->prepareRolesForDisplay($user->roles);
		return view('profile.show', compact('user'));
	}

	public function show($id)
	{
		$user = User::findOrFail($id);
		$user->load(['roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications']);
		$user->role = $this->prepareRolesForDisplay($user->roles);
		return view('profile.show', compact('user'));
	}

	protected function prepareRolesForDisplay($roles)
	{
		return ucwords(implode(', ', $roles->pluck('name')->toArray()));
	}

}
