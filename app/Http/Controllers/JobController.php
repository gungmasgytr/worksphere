<?php

namespace App\Http\Controllers;

use App\Models\JobPosting;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class JobController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    // Public routes - for job seekers
    public function index(Request $request)
    {
        $query = JobPosting::with(['recruiter', 'category'])
            ->active()
            ->where(function($q) {
                $q->whereNull('deadline')
                  ->orWhere('deadline', '>', now());
            });

        // Filter by category
        if ($request->category) {
            $query->where('category_id', $request->category);
        }

        // Filter by location
        if ($request->location) {
            $query->where('location', 'like', '%' . $request->location . '%');
        }

        // Filter by job type
        if ($request->job_type) {
            $query->where('job_type', $request->job_type);
        }

        // Search by title or description
        if ($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%');
            });
        }

        $jobs = $query->latest()->paginate(12);
        $categories = Category::all();

        return Inertia::render('Jobs/Index', [
            'auth' => ['user' => auth()->user()],
            'jobs' => $jobs,
            'categories' => $categories,
            'filters' => $request->only(['category', 'location', 'job_type', 'search'])
        ]);
    }

    public function show(JobPosting $job)
    {

        $job->load(['recruiter', 'category', 'skills']);

        return Inertia::render('Jobs/Show', [
            'auth' => ['user' => auth()->user()],
            'job' => $job,
            'hasApplied' => $job->applications()->where('jobseeker_id', auth()->user()->jobseekerProfile?->id)->exists()
        ]);
    }

    public function apply(JobPosting $job)
    {
        $user = auth()->user();
        $jobseekerProfile = $user->jobseekerProfile;

        if (!$jobseekerProfile) {
            return redirect()->back()->with('error', 'Please complete your profile first.');
        }

        // Check if already applied
        if ($job->applications()->where('jobseeker_id', $jobseekerProfile->id)->exists()) {
            return redirect()->back()->with('error', 'You have already applied for this job.');
        }

        // Create application
        $job->applications()->create([
            'jobseeker_id' => $jobseekerProfile->id,
            'status' => 'pending',
            'applied_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Application submitted successfully!');
    }

    // Recruiter routes
    public function recruiterIndex()
    {
        $this->middleware('role:recruiter');

        $recruiterProfile = auth()->user()->recruiterProfile;

        if (!$recruiterProfile) {
            return redirect()->route('profile.edit')->with('error', 'Please complete your company profile first.');
        }

        $jobs = JobPosting::where('recruiter_id', $recruiterProfile->id)
            ->with(['category', 'applications'])
            ->latest()
            ->paginate(10);

        return Inertia::render('Jobs/RecruiterIndex', [
            'auth' => ['user' => auth()->user()],
            'jobs' => $jobs
        ]);
    }

    public function create()
    {
        $this->middleware('role:recruiter');

        $categories = Category::all();

        return Inertia::render('Jobs/Create', [
            'auth' => ['user' => auth()->user()],
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $this->middleware('role:recruiter');

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'requirements' => 'nullable|string',
            'location' => 'required|string|max:255',
            'salary_min' => 'nullable|numeric|min:0',
            'salary_max' => 'nullable|numeric|min:0|gte:salary_min',
            'job_type' => 'required|in:full-time,part-time,contract,freelance',
            'experience_level' => 'required|in:entry,mid,senior,expert',
            'category_id' => 'required|exists:categories,id',
            'deadline' => 'nullable|date|after:today',
        ]);

        $recruiterProfile = auth()->user()->recruiterProfile;

        if (!$recruiterProfile) {
            return redirect()->route('profile.edit')->with('error', 'Please complete your company profile first.');
        }

        JobPosting::create([
            'recruiter_id' => $recruiterProfile->id,
            'title' => $request->title,
            'description' => $request->description,
            'requirements' => $request->requirements,
            'location' => $request->location,
            'salary_min' => $request->salary_min,
            'salary_max' => $request->salary_max,
            'job_type' => $request->job_type,
            'experience_level' => $request->experience_level,
            'category_id' => $request->category_id,
            'deadline' => $request->deadline,
            'status' => 'active',
        ]);

        return redirect()->route('jobs.recruiter.index')->with('success', 'Job posting created successfully!');
    }

    public function edit(JobPosting $job)
    {
        $this->middleware('role:recruiter');

        // Check if job belongs to current recruiter
        if ($job->recruiter_id !== auth()->user()->recruiterProfile?->id) {
            abort(403);
        }

        $categories = Category::all();

        return Inertia::render('Jobs/Edit', [
            'auth' => ['user' => auth()->user()],
            'job' => $job,
            'categories' => $categories
        ]);
    }

    public function update(Request $request, JobPosting $job)
    {
        $this->middleware('role:recruiter');

        // Check if job belongs to current recruiter
        if ($job->recruiter_id !== auth()->user()->recruiterProfile?->id) {
            abort(403);
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'requirements' => 'nullable|string',
            'location' => 'required|string|max:255',
            'salary_min' => 'nullable|numeric|min:0',
            'salary_max' => 'nullable|numeric|min:0|gte:salary_min',
            'job_type' => 'required|in:full-time,part-time,contract,freelance',
            'experience_level' => 'required|in:entry,mid,senior,expert',
            'category_id' => 'required|exists:categories,id',
            'deadline' => 'nullable|date|after:today',
            'status' => 'required|in:active,inactive,closed',
        ]);

        $job->update($request->only([
            'title', 'description', 'requirements', 'location',
            'salary_min', 'salary_max', 'job_type', 'experience_level',
            'category_id', 'deadline', 'status'
        ]));

        return redirect()->route('jobs.recruiter.index')->with('success', 'Job posting updated successfully!');
    }

    public function destroy(JobPosting $job)
    {
        $this->middleware('role:recruiter');

        // Check if job belongs to current recruiter
        if ($job->recruiter_id !== auth()->user()->recruiterProfile?->id) {
            abort(403);
        }

        $job->delete();

        return redirect()->route('jobs.recruiter.index')->with('success', 'Job posting deleted successfully!');
    }

    public function applications(JobPosting $job)
    {
        $this->middleware('role:recruiter');

        // Check if job belongs to current recruiter
        if ($job->recruiter_id !== auth()->user()->recruiterProfile?->id) {
            abort(403);
        }

        $applications = $job->applications()->with('jobseeker.user')->get();

        return Inertia::render('Jobs/Applications', [
            'auth' => ['user' => auth()->user()],
            'job' => $job,
            'applications' => $applications
        ]);
    }

    public function jobseekerApplications()
    {
        $this->middleware('role:jobseeker');

        $user = auth()->user();
        $profile = $user->jobseekerProfile;

        if (!$profile) {
            abort(404, 'Jobseeker profile not found');
        }

        $applications = $profile->applications()
            ->with(['jobPosting.recruiter', 'jobPosting.category'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Jobs/JobseekerApplications', [
            'auth' => ['user' => $user],
            'applications' => $applications
        ]);
    }
}