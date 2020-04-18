<?php

use App\Models\Todo;
use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create([
            'description' => 'Design a nice theme',
            'user_id' => 1,
            'is_completed' => 0,
            'ends_at' => now()->addMinutes(30), // minutes
            'order' => 1,
        ]);

        Todo::create([
            'description' => 'Make the theme responsive',
            'user_id' => 1,
            'is_completed' => 1,
            'ends_at' => now()->addMinutes(90), // hours
            'order' => 2,
        ]);

        Todo::create([
            'description' => 'Let theme shine like a star',
            'user_id' => 1,
            'is_completed' => 0,
            'ends_at' => now()->addHours(25), // day
            'order' => 3,
        ]);

        Todo::create([
            'description' => 'Let theme shine like a star',
            'user_id' => 1,
            'is_completed' => 0,
            'ends_at' => now()->addDays(5), // days
            'order' => 4,
        ]);

        Todo::create([
            'description' => 'Check your messages and notifications ',
            'user_id' => 1,
            'is_completed' => 0,
            'ends_at' => now()->addDays(8), // week
            'order' => 5,
        ]);

        Todo::create([
            'description' => 'Let theme shine like a star',
            'user_id' => 1,
            'is_completed' => 0,
            'ends_at' => now()->addDays(33), // month
            'order' => 6,
        ]);
    }
}
