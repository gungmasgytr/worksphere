<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JobController;

Route::get('/', function () {
    $jobs = \App\Models\JobPosting::with('recruiter', 'category')
        ->active()
        ->latest()
        ->take(6)
        ->get();

    $categories = \App\Models\Category::take(8)->get();

    return Inertia::render('Welcome', [
        'auth' => [
            'user' => auth()->user()
        ],
        'jobs' => $jobs,
        'categories' => $categories
    ]);
});

// Authentication Routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

// Dashboard Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/recruiter/dashboard', [DashboardController::class, 'recruiterDashboard'])
        ->middleware('role:recruiter')
        ->name('recruiter.dashboard');
    
    Route::get('/jobseeker/dashboard', [DashboardController::class, 'jobseekerDashboard'])
        ->middleware('role:jobseeker')
        ->name('jobseeker.dashboard');

    // Add create route here with same middleware pattern as dashboard
    Route::get('/recruiter/jobs/create', [JobController::class, 'create'])
        ->middleware('role:recruiter')
        ->name('jobs.create');
});

// Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

// Job Routes
Route::middleware('auth')->group(function () {
    // Public job routes (for job seekers)
    Route::get('/jobs', [JobController::class, 'index'])->name('jobs.index');
    Route::get('/jobs/{job}', [JobController::class, 'show'])->name('jobs.show');
    Route::post('/jobs/{job}/apply', [JobController::class, 'apply'])->name('jobs.apply');

    // Jobseeker applications route
    Route::middleware('role:jobseeker')->group(function () {
        Route::get('/jobseeker/applications', [JobController::class, 'jobseekerApplications'])->name('jobs.jobseeker.applications');
    });

    // Recruiter job management routes
    Route::middleware('role:recruiter')->group(function () {
        Route::get('/recruiter/jobs', [JobController::class, 'recruiterIndex'])->name('jobs.recruiter.index');
        Route::get('/recruiter/jobs/{job}', [JobController::class, 'recruiterShow'])->name('jobs.show');
        Route::post('/recruiter/jobs', [JobController::class, 'store'])->name('jobs.store');
        Route::get('/recruiter/jobs/{job}/edit', [JobController::class, 'edit'])->name('jobs.edit');
        Route::put('/recruiter/jobs/{job}', [JobController::class, 'update'])->name('jobs.update');
        Route::delete('/recruiter/jobs/{job}', [JobController::class, 'destroy'])->name('jobs.destroy');
        Route::get('/recruiter/jobs/{job}/applications', [JobController::class, 'applications'])->name('jobs.applications');
        Route::put('/recruiter/jobs/{job}/toggle-status', [JobController::class, 'toggleJobStatus'])->name('jobs.toggle-status');
        Route::put('/recruiter/applications/{application}/status', [JobController::class, 'updateApplicationStatus'])->name('applications.update-status');
        Route::get('/recruiter/jobseekers/{jobseeker}', [JobController::class, 'viewJobseekerProfile'])->name('jobseekers.profile');
        Route::post('/recruiter/applications/{application}/contact', [JobController::class, 'contactCandidate'])->name('applications.contact');
    });
});
