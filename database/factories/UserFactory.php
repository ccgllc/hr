<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    static $password;

    $statuses = collect([ 'applicant', 'candidate', 'new-hire', 'active', 'inactive', 'no-hire']);

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'status' => $statuses->random(),
        'api_token' => str_random(60),
        'remember_token' => str_random(60),
        'verification_token' => str_random(60),
        'applied' => 0
    ];
});
