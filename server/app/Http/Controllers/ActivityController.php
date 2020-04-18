<?php

namespace App\Http\Controllers;

use App\Models\Activity;

class ActivityController extends Controller
{
    public function view()
    {
        $activities = Activity::query()
            ->with(['user'])
            ->orderByDesc('id')
            ->get();

        return response($activities, 200);
    }
}
