<?php

use Illuminate\Database\Seeder;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = App\User::all();
        $role = App\Role::all();
        foreach($users as $user)
        {
        	$assignedRole = $role->random()->name;
        	$user->assignRole($assignedRole);
        }
    }
}
