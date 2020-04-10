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
        $postData = $this->validate($request, [
            'name' => 'required',
            'designation' => 'sometimes',
        ]);

        $user = User::find($request->user()->id);
        $user = tap($user)->update($postData);

        return $user;
    }
}
