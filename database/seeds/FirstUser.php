<?php

use Illuminate\Database\Seeder;

class FirstUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
	        'name' => 'Brandon Hamm',
	        'email' => 'brandon@structur.co',
	        'password' => bcrypt('secret'),
	        'verification_token' => str_random(60),
            'status' => 'active',
            'api_token' => str_random(60),
            'applied' => 1,
	    ]);
    }
}
