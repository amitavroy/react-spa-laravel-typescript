<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function getResponseData($response, $asArray = true)
    {
        return json_decode($response->getContent(), $asArray);
    }

    public function assertArraysAreEqual($array1, $array2)
    {
        return $this->assertEqualsCanonicalizing($array1, $array2);
    }

    public function assertValidationError($field, $response)
    {
        $response->assertStatus(422);
        $this->assertArrayHasKey($field, $response->decodeResponseJson('errors'));
    }
}
