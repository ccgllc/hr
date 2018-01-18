<?php

namespace App\Dashboard;

use App\Dashboard\Chart;
use App\Role;
use App\User;

class Dashboard 
{
	public $newHires;
	public $candidates;
	public $applicants;
	public $roles;
	public $userRoleChart;
	public $activeCount;
	public $inActiveCount;
	public $total;
	public $applicantCount;
	public $noHireCount;
	public $candidateCount;
	public $newHireCount;

	public function __construct()
	{
		$this->userRolesChart = new Chart;
		$this->newHires = $this->getUsers('new-hire', 4);
		$this->candidates = $this->getUsers('candidate', 4);
		$this->applicants = $this->getUsers('applicant', 4);
		$this->roles = $this->getRoles();
		$this->setCounts();
	}

	protected function getUsers($status, $quanity)
	{
		return User::recent()->status($status)->get()->take(4)->all();
	}

	protected function getRoles()
	{
		$roles = Role::with('users')->get();
		// dd($roles);
		$dataset = $this->userRolesChart->addDataset();
		foreach($roles as $role){
    		$this->userRolesChart->addLabel($role->name);
    		$this->userRolesChart->setData('roles', count($role->users));
    	}
	}

	protected function setCounts()
	{
		$this->activeCount = $this->getUserTypeCounts('active');
		$this->inActiveCount = $this->getUserTypeCounts('in-active');
		$this->noHireCount = $this->getUserTypeCounts('no-hire');
		$this->applicantCount = $this->getUserTypeCounts('applicant');
		$this->candidateCount = $this->getUserTypeCounts('candidate');
		$this->newHireCount = $this->getUserTypeCounts('new-hire');
	}

	protected function getUserTypeCounts($status)
	{
		return User::status($status)->count();
	}
}
