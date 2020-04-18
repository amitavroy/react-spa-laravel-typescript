<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Todo;
use Faker\Generator as Faker;

$factory->define(Todo::class, function (Faker $faker) {
    return [
        'description' => $faker->sentence,
        'user_id' => 1,
        'is_completed' => rand(0, 1),
        'ends_at' => now()->addHours(rand(0, 24)),
        'order' => 0,
    ];
});
