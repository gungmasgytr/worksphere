<?php

namespace Database\Factories;

use App\Models\JobseekerProfile;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobseekerProfile>
 */
class JobseekerProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JobseekerProfile::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $skills = [
            'PHP, Laravel, MySQL',
            'JavaScript, React, Node.js',
            'Python, Django, PostgreSQL',
            'Java, Spring Boot, MongoDB',
            'C#, .NET, SQL Server',
            'HTML, CSS, JavaScript, Vue.js',
            'Go, Docker, Kubernetes',
            'Ruby, Rails, Redis',
            'Swift, iOS Development',
            'Kotlin, Android Development',
            'Data Analysis, Python, Pandas',
            'Machine Learning, TensorFlow, Python',
            'UI/UX Design, Figma, Adobe XD',
            'DevOps, AWS, Jenkins',
            'Cybersecurity, Ethical Hacking'
        ];

        $experiences = [
            '3+ years experience in web development',
            '5+ years experience in software engineering',
            '2+ years experience in mobile app development',
            '4+ years experience in data science',
            '6+ years experience in system administration',
            'Fresh graduate with strong foundation in programming',
            '8+ years experience in full-stack development',
            '1+ year experience in UI/UX design',
            '7+ years experience in project management',
            '2+ years experience in DevOps'
        ];

        return [
            'user_id' => User::factory()->create([
                'name' => $this->faker->name(),
                'email' => $this->faker->unique()->safeEmail(),
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ])->assignRole('jobseeker')->id,
            'full_name' => $this->faker->name(),
            'bio' => $this->faker->paragraph(),
            'phone' => $this->faker->phoneNumber(),
            'location' => $this->faker->randomElement([
                'Jakarta, Indonesia',
                'Bandung, Indonesia',
                'Surabaya, Indonesia',
                'Yogyakarta, Indonesia',
                'Semarang, Indonesia',
                'Remote'
            ]),
            'skills' => $this->faker->randomElement($skills),
            'experience' => $this->faker->randomElement($experiences),
        ];
    }
}
