<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class JobPosting extends Model
{
    use HasFactory;

    protected $fillable = [
        'recruiter_id',
        'title',
        'description',
        'requirements',
        'location',
        'salary_min',
        'salary_max',
        'job_type',
        'experience_level',
        'status',
        'deadline',
        'category_id',
        'views',
    ];

    protected $casts = [
        'deadline' => 'datetime',
        'salary_min' => 'decimal:2',
        'salary_max' => 'decimal:2',
    ];

    // Relationships
    public function recruiter()
    {
        return $this->belongsTo(RecruiterProfile::class, 'recruiter_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeByCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }

    // Accessors
    public function getSalaryRangeAttribute()
    {
        if ($this->salary_min && $this->salary_max) {
            return '$' . number_format($this->salary_min) . ' - $' . number_format($this->salary_max);
        } elseif ($this->salary_min) {
            return 'From $' . number_format($this->salary_min);
        } elseif ($this->salary_max) {
            return 'Up to $' . number_format($this->salary_max);
        }
        return 'Salary not specified';
    }

    public function getIsExpiredAttribute()
    {
        return $this->deadline && $this->deadline->isPast();
    }

    public function getApplicationCountAttribute()
    {
        return $this->applications()->count();
    }
}
