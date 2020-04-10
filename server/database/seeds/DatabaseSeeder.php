<?php

use App\Models\Activity;
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

        User::create([
            'name' => 'Amitav Roy',
            'email' => 'reachme@amitavroy.com',
            'password' => bcrypt('password'),

            'designation' => 'Software Developer',
            'followers' => 172,
            'following' => 117,
            'friends' => 20,
        ]);

        User::create([
            'name' => 'Arnav Roy',
            'email' => 'arnav@amitavroy.com',
            'password' => bcrypt('password'),

            'designation' => 'Student',
            'followers' => 500,
            'following' => 200,
            'friends' => 50,
        ]);

        factory(Activity::class, 10)->create();
    }
}
