<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('login', [AccessTokenController::class, 'issueToken'])->middleware(['api-login', 'throttle']);

Route::middleware(['auth:api', 'get.expiry'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api', 'get.expiry']], function () {
    Route::get('/activities', [ActivityController::class, 'view'])->name('user.save');
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/todos', [TodoController::class, 'index'])->name('todo.list');
    Route::get('/todo/complete/{todo}', [TodoController::class, 'markComplete'])->name('todo.markComplete');
    Route::post('/todo/reorder', [TodoController::class, 'reorder'])->name('todo.reorder');

    Route::post('/user', [UserController::class, 'store'])->name('user.save');
});


Route::get('users/list', [UserController::class, 'index']);
