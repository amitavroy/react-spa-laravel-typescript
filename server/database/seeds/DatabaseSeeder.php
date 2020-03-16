<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(User::class, 20)->create();

        User::create([
            'name' => 'Amitav Roy',
            'email' => 'jhon.doe@gmail.com',
            'password' => bcrypt('password'),
        ]);
    }
}
