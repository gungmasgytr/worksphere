<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecruiterProfile extends Model
{
    protected $fillable = [
        'user_id',
        'company_name',
        'company_description',
        'website',
        'location',
        'phone',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function jobPostings()
    {
        return $this->hasMany(JobPosting::class, 'recruiter_id');
    }
}
