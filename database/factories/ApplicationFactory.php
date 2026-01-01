<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\JobPosting;
use App\Models\JobseekerProfile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Application::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobPosting = JobPosting::inRandomOrder()->first();
        $jobseeker = JobseekerProfile::inRandomOrder()->first();

        // Make sure we don't create duplicate applications
        while (Application::where('job_posting_id', $jobPosting->id)
                          ->where('jobseeker_id', $jobseeker->id)->exists()) {
            $jobPosting = JobPosting::inRandomOrder()->first();
            $jobseeker = JobseekerProfile::inRandomOrder()->first();
        }

        return [
            'jobseeker_id' => $jobseeker->id,
            'job_posting_id' => $jobPosting->id,
            'status' => $this->faker->randomElement(['pending', 'reviewed', 'shortlisted', 'rejected', 'hired']),
            'applied_at' => $this->faker->dateTimeBetween('-30 days', 'now'),
        ];
    }
}
