import React from 'react';
import { Link } from '@inertiajs/react';

export default function JobCard({ job }) {
    if (!job) return null;
    
    const {
        title,
        recruiter,
        experience_level,
        salary_min,
        salary_max,
        description,
        category,
        created_at,
        status
    } = job;

    const formatSalary = () => {
        if (salary_min && salary_max) {
            return `IDR ${salary_min.toLocaleString()} - ${salary_max.toLocaleString()}`;
        } else if (salary_min) {
            return `From IDR ${salary_min.toLocaleString()}`;
        } else if (salary_max) {
            return `Up to IDR ${salary_max.toLocaleString()}`;
        }
        return 'Salary negotiable';
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
            {/* Logo */}
                <div className="w-12 h-12 rounded-lg bg-[#001E36] flex items-center justify-center text-blue-400 font-bold text-xl">
                    Job
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{recruiter?.company_name || 'Company'}</p>
                </div>
            </div>

            {/* Status */}
            <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                {status}
            </span>
        </div>

        {/* Meta */}
        <div className="flex gap-6 mt-4 text-sm text-gray-700">
            <span>{experience_level}</span>
            <span className="font-medium">{formatSalary()}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            {description?.substring(0, 100)}...
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
            {category && (
                <span className="text-xs px-3 py-1 rounded-md bg-blue-50 text-blue-600">
                    {category.name}
                </span>
            )}
            <span className="text-xs px-3 py-1 rounded-md bg-blue-50 text-blue-600">
                {experience_level}
            </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
            <span className="text-xs text-gray-400">{formatDate(created_at)}</span>

            <Link href={`/jobs/${job.id}`} className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition">
            Apply
            <span>→</span>
            </Link>
        </div>
    </div>
)}