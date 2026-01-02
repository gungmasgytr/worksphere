import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'

export default function RecruiterShow({ auth, job, applications }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'reviewed':
                return 'bg-blue-100 text-blue-800'
            case 'shortlisted':
                return 'bg-green-100 text-green-800'
            case 'rejected':
                return 'bg-red-100 text-red-800'
            case 'hired':
                return 'bg-purple-100 text-purple-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Link
                                            href="/recruiter/dashboard"
                                            className="text-blue-600 hover:text-blue-800 mb-2 inline-block"
                                        >
                                            ← Back to Dashboard
                                        </Link>
                                        <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                                        <p className="text-gray-600 mt-1">{job.location} • {job.category?.name}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <Link
                                            href={`/recruiter/jobs/${job.id}/edit`}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                        >
                                            Edit Job
                                        </Link>
                                        <Link
                                            href={`/recruiter/jobs/${job.id}/applications`}
                                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                        >
                                            View Applications ({applications.length})
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Job Details */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Information</h2>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="font-medium text-gray-700">Status:</span>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
                                                    job.status === 'active' ? 'bg-green-100 text-green-800' :
                                                    job.status === 'inactive' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                    {job.status}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-medium text-gray-700">Job Type:</span>
                                                <span className="capitalize">{job.job_type.replace('-', ' ')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-medium text-gray-700">Experience Level:</span>
                                                <span className="capitalize">{job.experience_level}</span>
                                            </div>
                                            {job.salary_min && (
                                                <div className="flex justify-between">
                                                    <span className="font-medium text-gray-700">Salary Range:</span>
                                                    <span>${job.salary_min.toLocaleString()} - ${job.salary_max?.toLocaleString()}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="font-medium text-gray-700">Posted:</span>
                                                <span>{formatDate(job.created_at)}</span>
                                            </div>
                                            {job.deadline && (
                                                <div className="flex justify-between">
                                                    <span className="font-medium text-gray-700">Deadline:</span>
                                                    <span>{formatDate(job.deadline)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                                        <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                                    </div>

                                    {job.requirements && (
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                                            <p className="text-gray-700 whitespace-pre-line">{job.requirements}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="font-medium text-gray-700">Company:</span>
                                                <p className="mt-1">{job.recruiter?.company_name || 'Not specified'}</p>
                                            </div>
                                            <div>
                                                <span className="font-medium text-gray-700">Location:</span>
                                                <p className="mt-1">{job.recruiter?.location || 'Not specified'}</p>
                                            </div>
                                            {job.recruiter?.website && (
                                                <div>
                                                    <span className="font-medium text-gray-700">Website:</span>
                                                    <p className="mt-1">
                                                        <a
                                                            href={job.recruiter.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            {job.recruiter.website}
                                                        </a>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Application Summary</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-blue-600">{applications.length}</p>
                                                <p className="text-sm text-blue-800">Total Applications</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-green-600">
                                                    {applications.filter(app => app.status === 'shortlisted').length}
                                                </p>
                                                <p className="text-sm text-green-800">Shortlisted</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Applications Preview */}
                            {applications.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Applications</h2>
                                    <div className="space-y-4">
                                        {applications.slice(0, 3).map((application) => (
                                            <div key={application.id} className="border rounded-lg p-4">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">
                                                            {application.jobseeker?.user?.name}
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Applied: {formatDate(application.applied_at)}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(application.status)}`}>
                                                            {application.status}
                                                        </span>
                                                        <Link
                                                            href={`/recruiter/jobseekers/${application.jobseeker?.id}`}
                                                            className="text-blue-600 hover:text-blue-800 text-sm"
                                                        >
                                                            View Profile
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {applications.length > 3 && (
                                        <div className="mt-4 text-center">
                                            <Link
                                                href={`/recruiter/jobs/${job.id}/applications`}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                View all {applications.length} applications →
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}