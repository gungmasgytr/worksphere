<?php

namespace Database\Factories;

use App\Models\JobPosting;
use App\Models\RecruiterProfile;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobPosting>
 */
class JobPostingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JobPosting::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobTitles = [
            'Senior Full Stack Developer',
            'Frontend Developer (React)',
            'Backend Developer (Laravel)',
            'DevOps Engineer',
            'Mobile App Developer',
            'Software Architect',
            'Data Scientist',
            'Machine Learning Engineer',
            'UI/UX Designer',
            'Product Manager',
            'Project Manager',
            'Business Analyst',
            'QA Engineer',
            'Technical Writer',
            'System Administrator',
            'Database Administrator',
            'Security Engineer',
            'Cloud Engineer',
            'Marketing Manager',
            'Sales Representative',
            'HR Manager',
            'Financial Analyst',
            'Content Writer',
            'Graphic Designer',
            'Customer Support Specialist'
        ];

        $locations = [
            'Jakarta, Indonesia',
            'Bandung, Indonesia',
            'Surabaya, Indonesia',
            'Yogyakarta, Indonesia',
            'Semarang, Indonesia',
            'Medan, Indonesia',
            'Makassar, Indonesia',
            'Palembang, Indonesia',
            'Tangerang, Indonesia',
            'Depok, Indonesia',
            'Bekasi, Indonesia',
            'Remote',
            'Hybrid'
        ];

        $jobTypes = ['full-time', 'part-time', 'contract', 'freelance'];
        $experienceLevels = ['entry', 'mid', 'senior', 'expert'];

        $description = $this->faker->paragraphs(3, true);
        $requirements = $this->faker->sentences(5, true);

        return [
            'recruiter_id' => $this->faker->randomElement(RecruiterProfile::pluck('id')->toArray()),
            'title' => $this->faker->randomElement($jobTitles),
            'description' => $description,
            'requirements' => $requirements,
            'location' => $this->faker->randomElement($locations),
            'salary_min' => $this->faker->numberBetween(3000000, 15000000),
            'salary_max' => $this->faker->numberBetween(8000000, 30000000),
            'job_type' => $this->faker->randomElement($jobTypes),
            'experience_level' => $this->faker->randomElement($experienceLevels),
            'status' => $this->faker->randomElement(['active', 'inactive', 'closed']),
            'deadline' => $this->faker->optional(0.7)->dateTimeBetween('now', '+3 months'),
            'category_id' => Category::inRandomOrder()->first()->id ?? 1,
        ];
    }

    /**
     * Indicate that the job posting is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'active',
        ]);
    }

    /**
     * Indicate that the job posting is for remote work.
     */
    public function remote(): static
    {
        return $this->state(fn (array $attributes) => [
            'location' => 'Remote',
        ]);
    }
}
