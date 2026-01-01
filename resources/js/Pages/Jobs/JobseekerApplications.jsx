import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'

export default function JobseekerApplications({ auth, applications }) {
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
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
                                    <p className="text-gray-600 mt-1">Track all your job applications</p>
                                </div>
                                <Link
                                    href="/jobs"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Browse More Jobs
                                </Link>
                            </div>

                            {applications.data && applications.data.length > 0 ? (
                                <div className="space-y-4">
                                    {applications.data.map(application => (
                                        <div key={application.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <Link
                                                        href={`/jobs/${application.job_posting_id}`}
                                                        className="text-xl font-semibold text-gray-900 hover:text-blue-600"
                                                    >
                                                        {application.job_posting?.title}
                                                    </Link>
                                                    <p className="text-gray-600 mt-1">
                                                        {application.job_posting?.recruiter?.company_name} • {application.job_posting?.location}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {application.job_posting?.category?.name} • {application.job_posting?.job_type} • {application.job_posting?.experience_level}
                                                    </p>
                                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                                        <span>Applied on {formatDate(application.applied_at)}</span>
                                                        <span>•</span>
                                                        <span>Salary: {application.job_posting?.salary_range}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`px-3 py-1 text-sm font-medium rounded-full capitalize ${getStatusColor(application.status)}`}>
                                                        {application.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {application.status === 'shortlisted' && (
                                                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                                                    <p className="text-green-800 text-sm">
                                                        🎉 Congratulations! You've been shortlisted for this position. The recruiter may contact you soon.
                                                    </p>
                                                </div>
                                            )}

                                            {application.status === 'rejected' && (
                                                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                                                    <p className="text-red-800 text-sm">
                                                        This application was not successful. Don't be discouraged - keep applying to other opportunities!
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Pagination */}
                                    {applications.last_page > 1 && (
                                        <div className="mt-8 flex justify-center">
                                            <div className="flex space-x-2">
                                                {applications.prev_page_url && (
                                                    <Link
                                                        href={applications.prev_page_url}
                                                        className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                                                    >
                                                        Previous
                                                    </Link>
                                                )}

                                                {Array.from({ length: applications.last_page }, (_, i) => i + 1).map(page => (
                                                    <Link
                                                        key={page}
                                                        href={`${applications.path}?page=${page}`}
                                                        className={`px-3 py-2 border rounded ${
                                                            page === applications.current_page
                                                                ? 'bg-blue-600 text-white border-blue-600'
                                                                : 'border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        {page}
                                                    </Link>
                                                ))}

                                                {applications.next_page_url && (
                                                    <Link
                                                        href={applications.next_page_url}
                                                        className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                                                    >
                                                        Next
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-gray-400 text-6xl mb-4">📄</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Applications Yet</h3>
                                    <p className="text-gray-600 mb-6">
                                        You haven't applied to any jobs yet. Start exploring opportunities and submit your first application!
                                    </p>
                                    <Link
                                        href="/jobs"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                                    >
                                        Browse Available Jobs
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}