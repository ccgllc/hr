<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Routing\ResponseFactory;

class ProfileController extends Controller
{

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('dashboard')->only('show');
	}
    
	public function index()
	{
		$user = Auth::user();
		$user->load(['roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications', 'softwareExperiences']);
		$user->role = $this->prepareRolesForDisplay($user->roles);
		return response()
					->view('profile.show', compact('user'), 200);
					//->header('X-TOKEN', 'klajdbflkajhfa');
	}

	public function show($id)
	{
		$user = User::findOrFail($id);
		$user->load(['roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications', 'softwareExperiences', 'avatar']);
		$user->role = $this->prepareRolesForDisplay($user->roles);
		return view('profile.show', compact('user'));
	}

	protected function prepareRolesForDisplay($roles)
	{
		return ucwords(implode(', ', $roles->pluck('name')->toArray()));
	}
}
