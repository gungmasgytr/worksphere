<?php

namespace Database\Factories;

use App\Models\RecruiterProfile;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RecruiterProfile>
 */
class RecruiterProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RecruiterProfile::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $companyNames = [
            'PT Teknologi Maju',
            'CV Digital Solutions',
            'PT Startup Indonesia',
            'CV Inovasi Teknologi',
            'PT Software House Indonesia',
            'CV Web Development Pro',
            'PT E-Commerce Solutions',
            'CV Mobile App Experts',
            'PT Data Analytics Indonesia',
            'CV Cloud Computing Services',
            'PT Fintech Innovation',
            'CV AI & Machine Learning',
            'PT Cybersecurity Experts',
            'CV Game Development Studio',
            'PT Digital Marketing Agency'
        ];

        $industries = [
            'Technology',
            'Software Development',
            'E-commerce',
            'Fintech',
            'Healthcare',
            'Education',
            'Retail',
            'Manufacturing',
            'Consulting',
            'Media & Entertainment'
        ];

        $companyName = $this->faker->randomElement($companyNames);

        return [
            'user_id' => User::factory()->create([
                'name' => $this->faker->name(),
                'email' => $this->faker->unique()->safeEmail(),
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ])->assignRole('recruiter')->id,
            'company_name' => $companyName,
            'company_description' => $this->faker->paragraphs(2, true),
            'website' => $this->faker->url(),
            'location' => $this->faker->randomElement([
                'Jakarta, Indonesia',
                'Bandung, Indonesia',
                'Surabaya, Indonesia',
                'Yogyakarta, Indonesia',
                'Semarang, Indonesia'
            ]),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
