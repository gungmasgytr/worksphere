<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Software Development', 'description' => 'Programming and software engineering roles'],
            ['name' => 'Data Science', 'description' => 'Data analysis, machine learning, and AI roles'],
            ['name' => 'Design', 'description' => 'UI/UX design, graphic design, and creative roles'],
            ['name' => 'Marketing', 'description' => 'Digital marketing, content creation, and advertising roles'],
            ['name' => 'Sales', 'description' => 'Business development and sales positions'],
            ['name' => 'Human Resources', 'description' => 'HR, recruitment, and people management roles'],
            ['name' => 'Finance', 'description' => 'Accounting, financial analysis, and finance roles'],
            ['name' => 'Operations', 'description' => 'Project management and operations roles'],
            ['name' => 'Customer Service', 'description' => 'Support, customer success, and service roles'],
            ['name' => 'Education', 'description' => 'Teaching, training, and educational roles'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}