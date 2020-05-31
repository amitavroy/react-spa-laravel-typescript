<?php

namespace Tests\Feature;

use App\Models\Todo;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TodoTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_shows_list_of_todos()
    {
        $user = factory(User::class)->create();
        factory(Todo::class, 5)->create();

        $response = $this->actingAs($user, 'api')
            ->json('GET', \route('todo.list'));
        $data = $this->getResponseData($response);

        $this->assertCount(5, $data);
    }

    /** @test */
    public function it_gives_only_current_user_todo()
    {
        $user = factory(User::class)->create();
        factory(Todo::class, 5)->create(['user_id' => $user->id]);
        factory(Todo::class, 3)->create(['user_id' => 2]);

        $response = $this->actingAs($user, 'api')
            ->json('GET', \route('todo.list'));
        $data = $this->getResponseData($response);

        $this->assertCount(5, $data);
    }
}
