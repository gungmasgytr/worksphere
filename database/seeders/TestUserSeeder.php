<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\RecruiterProfile;
use App\Models\JobseekerProfile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TestUserSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create test recruiter
        $recruiter = User::firstOrCreate([
            'email' => 'john.recruiter@worksphere.test',
        ], [
            'name' => 'John Recruiter',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $recruiter->assignRole('recruiter');

        RecruiterProfile::firstOrCreate([
            'user_id' => $recruiter->id,
        ], [
            'company_name' => 'Tech Solutions Inc.',
            'company_description' => 'Leading technology company specializing in software development.',
            'website' => 'https://techsolutions.com',
            'location' => 'New York, NY',
            'phone' => '+1-555-0199',
        ]);

        // Create test jobseeker
        $jobseeker = User::firstOrCreate([
            'email' => 'jane.developer@worksphere.test',
        ], [
            'name' => 'Jane Developer',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $jobseeker->assignRole('jobseeker');

        JobseekerProfile::firstOrCreate([
            'user_id' => $jobseeker->id,
        ], [
            'full_name' => 'Jane Developer',
            'phone' => '+1-555-0123',
            'location' => 'San Francisco, CA',
            'bio' => 'Experienced full-stack developer with 5 years of experience in web development.',
            'skills' => 'PHP, Laravel, React, JavaScript, MySQL, Git',
            'experience' => 'Senior Full Stack Developer at StartupXYZ (2020-Present), Full Stack Developer at AgencyABC (2018-2020)',
        ]);
    }
}