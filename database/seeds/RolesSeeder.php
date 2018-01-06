<?php

use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $roles = ['administrator', 'accounting', 'adjuster', 'reviewer', 'clerical', 'marketing', 'i.t.' ];
        foreach ($roles as $role)
        {
       		DB::table('roles')->insert([
	            'name' => $role,
	            'label' => strtoupper($role)
       	 	]);
        }
    }
}
