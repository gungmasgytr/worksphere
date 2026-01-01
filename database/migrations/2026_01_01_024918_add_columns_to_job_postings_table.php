<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('job_postings', function (Blueprint $table) {
            $table->foreignId('recruiter_id')->constrained('recruiter_profiles')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->text('requirements')->nullable();
            $table->string('location');
            $table->decimal('salary_min', 10, 2)->nullable();
            $table->decimal('salary_max', 10, 2)->nullable();
            $table->enum('job_type', ['full-time', 'part-time', 'contract', 'freelance']);
            $table->enum('experience_level', ['entry', 'mid', 'senior', 'expert']);
            $table->enum('status', ['active', 'inactive', 'closed'])->default('active');
            $table->date('deadline')->nullable();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_postings', function (Blueprint $table) {
            $table->dropForeign(['recruiter_id']);
            $table->dropForeign(['category_id']);
            $table->dropColumn([
                'recruiter_id',
                'title',
                'description',
                'requirements',
                'location',
                'salary_min',
                'salary_max',
                'job_type',
                'experience_level',
                'status',
                'deadline',
                'category_id'
            ]);
        });
    }
};
