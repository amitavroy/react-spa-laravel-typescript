<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function index()
    {
        Log::alert("I was here");
        logger("I dont come there");
        return view('welcome');
    }
}
