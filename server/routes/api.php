<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('login', [AccessTokenController::class, 'issueToken'])->middleware(['api-login', 'throttle']);

Route::middleware(['auth:api', 'get.expiry'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('/user', [UserController::class, 'store']);
});


Route::get('users/list', [UserController::class, 'index']);
