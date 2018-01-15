<?php

namespace App\Http\Controllers;

use App\Dashboard\Dashboard;
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
    	$data = new Dashboard;
    	return view('dashboard', compact('data'));
    }
}
