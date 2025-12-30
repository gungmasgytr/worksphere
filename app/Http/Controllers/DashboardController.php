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
        $this->middleware('role:recruiter');
        
        $user = auth()->user();
        $profile = $user->recruiterProfile;
        
        return Inertia::render('Dashboard/Recruiter', [
            'user' => $user,
            'profile' => $profile
        ]);
    }

    public function jobseekerDashboard()
    {
        $this->middleware('role:jobseeker');
        
        $user = auth()->user();
        $profile = $user->jobseekerProfile;
        
        return Inertia::render('Dashboard/Jobseeker', [
            'user' => $user,
            'profile' => $profile
        ]);
    }
}