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
            ->json('GET', route('todo.list'));
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
            ->json('GET', route('todo.list'));
        $data = $this->getResponseData($response);

        $this->assertCount(5, $data);
    }

    /** @test */
    public function it_sends_todo_in_correct_order()
    {
        $user = factory(User::class)->create();
        factory(Todo::class)->create(['order' => 2, 'user_id' => $user->id]);
        factory(Todo::class)->create(['order' => 1, 'user_id' => $user->id]);
        factory(Todo::class)->create(['order' => 0, 'user_id' => $user->id]);

        $response = $this->actingAs($user, 'api')
            ->json('GET', route('todo.list'));
        $data = $this->getResponseData($response);

        $this->assertEquals(3, $data[0]['id']);
    }

    /** @test */
    public function it_marks_an_incomplete_task_as_complete()
    {
        $user = factory(User::class)->create();
        $todo = factory(Todo::class)->create(['is_completed' => 0, 'user_id' => $user->id]);

        $response = $this->actingAs($user, 'api')
            ->json('GET', route('todo.markComplete', ['todo' => $todo->id]));
        $data = $this->getResponseData($response);

        $this->assertEquals(1, $data['is_completed']);
    }

    /** @test */
    public function it_marks_a_complete_task_as_incomplete()
    {
        $user = factory(User::class)->create();
        $todo = factory(Todo::class)->create(['is_completed' => 1, 'user_id' => $user->id]);

        $response = $this->actingAs($user, 'api')
            ->json('GET', route('todo.markComplete', ['todo' => $todo->id]));
        $data = $this->getResponseData($response);

        $this->assertEquals(0, $data['is_completed']);
    }

    /** @test */
    public function it_changes_the_order()
    {
        $user = factory(User::class)->create();
        $todo1 = factory(Todo::class)->create(['user_id' => $user->id]);
        $todo2 = factory(Todo::class)->create(['user_id' => $user->id]);
        $todo3 = factory(Todo::class)->create(['user_id' => $user->id]);

        $postData = ['order' => [
            ['id' => 1, 'order' => 2],
            ['id' => 2, 'order' => 3],
            ['id' => 3, 'order' => 1],
        ]];

        $response = $this->actingAs($user, 'api')
            ->json('POST', route('todo.reorder'), $postData)
            ->assertStatus(204);

        $data = Todo::all()->toArray();

        $this->assertEquals(1, $data[0]['id']);
        $this->assertEquals(3, $data[2]['id']);
    }
}
