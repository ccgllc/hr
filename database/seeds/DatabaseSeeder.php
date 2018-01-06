<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            FirstUser::class,
            UsersSeeder::class,
            RolesSeeder::class,
            RoleUserSeeder::class
        ]);
    }
}
