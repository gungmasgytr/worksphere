<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        // Create roles
        $recruiterRole = Role::firstOrCreate(['name' => 'recruiter']);
        $jobseekerRole = Role::firstOrCreate(['name' => 'jobseeker']);

        // Create permissions
        $permissions = [
            'create-job-posting',
            'edit-job-posting',
            'delete-job-posting',
            'view-applications',
            'apply-to-job',
            'view-job-postings',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Assign permissions to roles
        $recruiterRole->givePermissionTo([
            'create-job-posting',
            'edit-job-posting',
            'delete-job-posting',
            'view-applications',
            'view-job-postings',
        ]);

        $jobseekerRole->givePermissionTo([
            'apply-to-job',
            'view-job-postings',
        ]);
    }
}
