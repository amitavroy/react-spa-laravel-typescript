<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

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
        $response = $this->actingAs($this->user, 'api')->json("POST", $this->url, $postData     );
        $this->assertValidationError('name', $response);
    }

}
