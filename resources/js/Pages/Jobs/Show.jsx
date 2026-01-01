import Layout from '../../Components/Layout'
import { Link, useForm } from '@inertiajs/react'

export default function Show({ auth, job, hasApplied }) {
    const { post, processing } = useForm()

    const handleApply = () => {
        post(`/jobs/${job.id}/apply`)
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href="/jobs"
                            className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            ← Back to Jobs
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                        {/* Job Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                            <p className="text-blue-100 text-lg">
                                {job.recruiter?.company_name || 'Company'} • {job.location}
                            </p>
                            <div className="flex items-center gap-4 mt-4 text-blue-100">
                                <span className="bg-blue-500 px-3 py-1 rounded-full text-sm capitalize">
                                    {job.job_type.replace('-', ' ')}
                                </span>
                                <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                                    {job.experience_level} level
                                </span>
                                {job.deadline && (
                                    <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                                        Deadline: {formatDate(job.deadline)}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="p-8">
                            {/* Job Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Salary Range</h3>
                                    <p className="text-gray-700">{job.salary_range}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Job Type</h3>
                                    <p className="text-gray-700 capitalize">{job.job_type.replace('-', ' ')}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                                    <p className="text-gray-700">{job.category?.name || 'Not specified'}</p>
                                </div>
                            </div>

                            {/* Job Description */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                                    {job.description}
                                </div>
                            </div>

                            {/* Requirements */}
                            {job.requirements && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                                    <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                                        {job.requirements}
                                    </div>
                                </div>
                            )}

                            {/* Company Info */}
                            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Company</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Company</h3>
                                        <p className="text-gray-700">{job.recruiter?.company_name || 'Not specified'}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Location</h3>
                                        <p className="text-gray-700">{job.location}</p>
                                    </div>
                                    {job.recruiter?.website && (
                                        <div className="md:col-span-2">
                                            <h3 className="font-semibold text-gray-900">Website</h3>
                                            <a
                                                href={job.recruiter.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                {job.recruiter.website}
                                            </a>
                                        </div>
                                    )}
                                    {job.recruiter?.company_description && (
                                        <div className="md:col-span-2">
                                            <h3 className="font-semibold text-gray-900 mt-4">Company Description</h3>
                                            <p className="text-gray-700 mt-2">{job.recruiter.company_description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Apply Button */}
                            <div className="flex justify-center">
                                {hasApplied ? (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-md">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            You have already applied for this job
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleApply}
                                        disabled={processing}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 text-lg font-semibold"
                                    >
                                        {processing ? 'Applying...' : 'Apply for this Job'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}