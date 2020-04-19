<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::query()
            ->where('user_id', Auth::user()->id)
            ->orderBy('order')
            ->get();

        return response()->json($todos, 200);
    }

    public function markComplete(Todo $todo)
    {
        if ($todo->is_completed == 0) {
            $todo->is_completed = 1;
        } else {
            $todo->is_completed = 0;
        }

        $todo->save();

        return response()->json($todo, 200);
    }
}
