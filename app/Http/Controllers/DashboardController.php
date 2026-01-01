<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function recruiterDashboard()
    {
        $user = auth()->user();
        $profile = $user->recruiterProfile;
        
        // Get statistics
        $activeJobsCount = $profile ? $profile->jobPostings()->where('status', 'active')->count() : 0;
        $totalApplicationsCount = $profile ? $profile->jobPostings()->with('applications')->get()->sum(fn($job) => $job->applications->count()) : 0;
        $totalViewsCount = $profile ? $profile->jobPostings()->sum('views') : 0; // Assuming 'views' column exists
        
        // Get recent job postings
        $recentJobs = $profile ? $profile->jobPostings()
            ->with('category')
            ->latest()
            ->take(5)
            ->get() : collect();
        
        // Get recent applications
        $recentApplications = $profile ? \App\Models\Application::with(['jobPosting', 'jobseeker.user'])
            ->whereHas('jobPosting', function($q) use ($profile) {
                $q->where('recruiter_id', $profile->id);
            })
            ->latest()
            ->take(5)
            ->get() : collect();
        
        return Inertia::render('Dashboard/Recruiter', [
            'auth' => [
                'user' => $user
            ],
            'user' => $user,
            'profile' => $profile,
            'stats' => [
                'active_jobs' => $activeJobsCount,
                'applications' => $totalApplicationsCount,
                'views' => $totalViewsCount,
            ],
            'recentJobs' => $recentJobs,
            'recentApplications' => $recentApplications
        ]);
    }

    public function jobseekerDashboard()
    {
        $user = auth()->user();
        $profile = $user->jobseekerProfile;

        // Get statistics
        $applicationsCount = $profile ? $profile->applications()->count() : 0;
        $interviewsCount = $profile ? $profile->applications()->where('status', 'shortlisted')->count() : 0;
        $profileViewsCount = $profile ? $profile->applications()->count() : 0; // Simplified for now

        // Get recent applications
        $recentApplications = $profile ? $profile->applications()
            ->with(['jobPosting.recruiter'])
            ->latest()
            ->take(5)
            ->get() : collect();

        // Get job recommendations (active jobs that match user's skills/location)
        $jobRecommendations = \App\Models\JobPosting::with(['recruiter', 'category'])
            ->active()
            ->where(function($q) use ($profile) {
                if ($profile && $profile->location) {
                    $q->where('location', 'like', '%' . $profile->location . '%');
                }
            })
            ->where(function($q) use ($profile) {
                if ($profile && $profile->skills) {
                    $skills = explode(',', $profile->skills);
                    foreach ($skills as $skill) {
                        $q->orWhere('title', 'like', '%' . trim($skill) . '%')
                          ->orWhere('description', 'like', '%' . trim($skill) . '%')
                          ->orWhere('requirements', 'like', '%' . trim($skill) . '%');
                    }
                }
            })
            ->latest()
            ->take(6)
            ->get();

        return Inertia::render('Dashboard/Jobseeker', [
            'auth' => [
                'user' => $user
            ],
            'user' => $user,
            'profile' => $profile,
            'stats' => [
                'applications' => $applicationsCount,
                'interviews' => $interviewsCount,
                'profile_views' => $profileViewsCount,
            ],
            'recentApplications' => $recentApplications,
            'jobRecommendations' => $jobRecommendations
        ]);
    }
}