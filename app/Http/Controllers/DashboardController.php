<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
	public function __construct()
	{
		$this->middleware(['auth', 'dashboard']);
	}

    public function show()
    {
    	$data = $this->getDashboardData();
    	return view('dashboard', compact('data'));
    }

    protected function getDashboardData()
    {
    	$data = new \stdClass();
    	$roles = Role::all();
    	$roles->load('users');
    	foreach($roles as $role){
    		$data->labels[] = $role->name;
    		$data->datasets->data[] = count($role->users);
    	}
        $data->applicants = User::status('applicant')->get();
        $data->applicantCount = $data->applicants->count();
        // dd($data->applicants);
    	$data->totalUsers = User::count() - $data->applicantCount;
    	return $data;
    }
}
