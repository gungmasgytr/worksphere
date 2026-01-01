<?php

namespace Database\Seeders;

use App\Models\JobseekerProfile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobseekerSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 30 job seekers
        JobseekerProfile::factory(30)->create();

        $this->command->info('Created 30 job seekers');
    }
}