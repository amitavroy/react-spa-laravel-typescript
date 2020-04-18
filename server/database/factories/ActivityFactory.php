<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Activity;
use Faker\Generator as Faker;

$factory->define(Activity::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, 2),
        'caption' => $faker->paragraph,
        'type' => 'text',
        'comments' => rand(0, 50),
        'likes' => rand(0, 50),
    ];
});
