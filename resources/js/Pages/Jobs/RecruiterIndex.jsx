import Layout from '../../Components/Layout'
import { Link, router } from '@inertiajs/react'
import Swal from 'sweetalert2'

export default function RecruiterIndex({ auth, jobs }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800'
            case 'inactive':
                return 'bg-yellow-100 text-yellow-800'
            case 'closed':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    const handleToggleStatus = (jobId, currentStatus) => {
        const action = currentStatus === 'active' ? 'deactivate' : 'activate'
        
        Swal.fire({
            title: `${action.charAt(0).toUpperCase() + action.slice(1)} Job?`,
            text: `Are you sure you want to ${action} this job posting?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, ${action} it!`
        }).then((result) => {
            if (result.isConfirmed) {
                router.put(`/recruiter/jobs/${jobId}/toggle-status`, {}, {
                    preserveScroll: true,
                })
            }
        })
    }

    const handleDelete = (jobId) => {
        Swal.fire({
            title: 'Delete Job Posting?',
            text: 'This action cannot be undone. All applications will also be deleted.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/recruiter/jobs/${jobId}`, {
                    preserveScroll: true,
                })
            }
        })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">My Job Postings</h1>
                                    <p className="text-gray-600 mt-1">Manage your job listings and view applications</p>
                                </div>
                                <Link
                                    href="/recruiter/jobs/create"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    + Post New Job
                                </Link>
                            </div>

                            {jobs.data.length === 0 ? (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No job postings yet</h3>
                                    <p className="mt-2 text-gray-600">Create your first job posting to start attracting talent.</p>
                                    <div className="mt-6">
                                        <Link
                                            href="/recruiter/jobs/create"
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Create Your First Job Posting
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {jobs.data.map(job => (
                                        <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl font-semibold text-gray-900">
                                                            {job.title}
                                                        </h3>
                                                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(job.status)}`}>
                                                            {job.status}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                                        <span>{job.location}</span>
                                                        <span>•</span>
                                                        <span className="capitalize">{job.job_type.replace('-', ' ')}</span>
                                                        <span>•</span>
                                                        <span>{job.experience_level} level</span>
                                                        <span>•</span>
                                                        <span>{job.application_count} applications</span>
                                                    </div>

                                                    <p className="text-gray-700 mb-3 line-clamp-2">
                                                        {job.description.substring(0, 150)}...
                                                    </p>

                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>Posted: {formatDate(job.created_at)}</span>
                                                        {job.deadline && (
                                                            <>
                                                                <span>•</span>
                                                                <span>Deadline: {formatDate(job.deadline)}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="ml-6 flex flex-col gap-2">
                                                    <Link
                                                        href={`/recruiter/jobs/${job.id}/applications`}
                                                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm text-center"
                                                    >
                                                        View Applications ({job.application_count})
                                                    </Link>
                                                    <button
                                                        onClick={() => handleToggleStatus(job.id, job.status)}
                                                        className={`px-4 py-2 rounded-md text-sm text-center text-white ${
                                                            job.status === 'active'
                                                                ? 'bg-yellow-600 hover:bg-yellow-700'
                                                                : 'bg-green-600 hover:bg-green-700'
                                                        }`}
                                                    >
                                                        {job.status === 'active' ? 'Deactivate' : 'Activate'}
                                                    </button>
                                                    <Link
                                                        href={`/recruiter/jobs/${job.id}/edit`}
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm text-center"
                                                    >
                                                        Edit Job
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(job.id)}
                                                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {jobs.last_page > 1 && (
                                <div className="mt-8 flex justify-center">
                                    <div className="flex space-x-1">
                                        {jobs.links.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                className={`px-3 py-2 text-sm border rounded-md ${
                                                    link.active
                                                        ? 'bg-blue-600 text-white border-blue-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                                }`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}