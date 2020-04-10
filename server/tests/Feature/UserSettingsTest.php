<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserSettingsTest extends TestCase
{
    use RefreshDatabase;

    private $user;
    private $url;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
        $this->url = route('user.save');
    }

    /** @test */
    public function it_requireds_name_while_saving()
    {
        $postData = ['designation' => 'Something'];
        $response = $this->actingAs($this->user, 'api')->json("POST", $this->url, $postData);
        $this->assertValidationError('name', $response);
    }

    /** @test */
    public function it_saves_and_returns_user_data()
    {
        $postData = ['designation' => 'Something', 'name' => 'Jhon Doe'];
        $response = $this->actingAs($this->user, 'api')->json("POST", $this->url, $postData);
        $this->assertDatabaseHas('users', $postData);
    }
}
