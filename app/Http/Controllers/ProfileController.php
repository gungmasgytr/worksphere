<?php

namespace App\Http\Controllers;

use App\Models\RecruiterProfile;
use App\Models\JobseekerProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function show()
    {
        $user = auth()->user();

        if ($user->isRecruiter()) {
            $profile = $user->recruiterProfile;
            return Inertia::render('Profile/Recruiter', [
                'auth' => ['user' => $user],
                'profile' => $profile
            ]);
        } else {
            $profile = $user->jobseekerProfile;
            return Inertia::render('Profile/Jobseeker', [
                'auth' => ['user' => $user],
                'profile' => $profile
            ]);
        }
    }

    public function edit()
    {
        $user = auth()->user();

        if ($user->isRecruiter()) {
            $profile = $user->recruiterProfile ?? new RecruiterProfile();
            return Inertia::render('Profile/EditRecruiter', [
                'auth' => ['user' => $user],
                'profile' => $profile
            ]);
        } else {
            $profile = $user->jobseekerProfile ?? new JobseekerProfile();
            return Inertia::render('Profile/EditJobseeker', [
                'auth' => ['user' => $user],
                'profile' => $profile
            ]);
        }
    }

    public function update(Request $request)
    {
        $user = auth()->user();

        if ($user->isRecruiter()) {
            $this->updateRecruiterProfile($request, $user);
        } else {
            $this->updateJobseekerProfile($request, $user);
        }

        return redirect()->route('profile.show')->with('success', 'Profile updated successfully');
    }

    private function updateRecruiterProfile(Request $request, $user)
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'company_description' => 'nullable|string',
            'website' => 'nullable|url',
            'location' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        $user->recruiterProfile()->updateOrCreate(
            ['user_id' => $user->id],
            $request->only(['company_name', 'company_description', 'website', 'location', 'phone'])
        );
    }

    private function updateJobseekerProfile(Request $request, $user)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'location' => 'nullable|string|max:255',
            'skills' => 'nullable|string',
            'experience' => 'nullable|string',
        ]);

        $user->jobseekerProfile()->updateOrCreate(
            ['user_id' => $user->id],
            $request->only(['full_name', 'bio', 'phone', 'location', 'skills', 'experience'])
        );
    }
}