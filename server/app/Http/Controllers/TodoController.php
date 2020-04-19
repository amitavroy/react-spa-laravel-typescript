<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

    public function reorder(Request $request)
    {
        $this->validate($request, [
            'order' => 'required|array',
        ]);

        $order = $request->input('order');

        DB::transaction(function () use ($order) {
            foreach ($order as $value) {
                Todo::find($value['id'])->update(['order' => $value['order']]);
            }
        });
    }
}
