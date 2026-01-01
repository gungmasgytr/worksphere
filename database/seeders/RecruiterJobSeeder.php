<?php

namespace Database\Seeders;

use App\Models\RecruiterProfile;
use App\Models\JobPosting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecruiterJobSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 15 recruiters
        $recruiters = RecruiterProfile::factory(15)->create();

        // Create job postings for each recruiter
        foreach ($recruiters as $recruiter) {
            // Each recruiter gets between 3-8 job postings
            $jobCount = rand(3, 8);

            JobPosting::factory($jobCount)->create([
                'recruiter_id' => $recruiter->id,
            ]);
        }

        $this->command->info('Created ' . $recruiters->count() . ' recruiters with ' . JobPosting::count() . ' total job postings');
    }
}