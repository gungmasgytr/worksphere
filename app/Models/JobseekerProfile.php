<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class JobseekerProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'full_name',
        'bio',
        'phone',
        'location',
        'skills',
        'experience',
        'resume_path',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class, 'jobseeker_id');
    }
}
