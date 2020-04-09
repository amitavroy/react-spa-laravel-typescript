<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()->orderByDesc('id')->paginate(5);
        return response($users, 200);
    }

    public function store(Request $request)
    {
        $allowedKeys = [
            'name', 'designation',
        ];

        $data = $request->all();

        $finalData = [];
        foreach ($data as $key => $value) {
            if (!in_array($key, $allowedKeys)) {
                return response(['message' => "You cannot edit {$key}"], 400);
            }
            $finalData[$key] = $value;
        }

        $user = User::find($request->user()->id);
        $user = tap($user)->update($finalData);

        return $user;
    }
}
