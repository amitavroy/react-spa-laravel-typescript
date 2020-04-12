<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $guarded = [];

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
