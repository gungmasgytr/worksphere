import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'

export default function Jobseeker({ auth, user, profile, stats, recentApplications, jobRecommendations }) {
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
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">Job Seeker Dashboard</h1>
                                <p className="text-gray-600">Welcome back, {user.name}!</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-blue-900">Applications</h3>
                                    <p className="text-3xl font-bold text-blue-600">{stats?.applications || 0}</p>
                                    <p className="text-sm text-blue-600 mt-1">Total applications submitted</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-green-900">Interviews</h3>
                                    <p className="text-3xl font-bold text-green-600">{stats?.interviews || 0}</p>
                                    <p className="text-sm text-green-600 mt-1">Shortlisted applications</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-purple-900">Profile Views</h3>
                                    <p className="text-3xl font-bold text-purple-600">{stats?.profile_views || 0}</p>
                                    <p className="text-sm text-purple-600 mt-1">Employers viewed your profile</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                                    <div className="space-y-3">
                                        <Link
                                            href="/jobs"
                                            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                                        >
                                            Browse Jobs
                                        </Link>
                                        <Link
                                            href="/jobseeker/applications"
                                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 inline-block text-center"
                                        >
                                            My Applications
                                        </Link>
                                        <Link
                                            href="/profile/edit"
                                            className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 inline-block text-center"
                                        >
                                            My Profile
                                        </Link>
                                        <Link
                                            href="/profile/edit"
                                            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 inline-block text-center"
                                        >
                                            Update Resume
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
                                    {profile ? (
                                        <div className="space-y-2">
                                            <p><strong>Name:</strong> {profile.full_name}</p>
                                            <p><strong>Location:</strong> {profile.location || 'Not set'}</p>
                                            <p><strong>Skills:</strong> {profile.skills || 'Not set'}</p>
                                            <p><strong>Experience:</strong> {profile.experience ? profile.experience.substring(0, 50) + '...' : 'Not set'}</p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">Complete your profile to attract employers.</p>
                                    )}
                                    <Link
                                        href="/profile/edit"
                                        className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                                    >
                                        {profile ? 'Edit Profile' : 'Complete Profile'} →
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-white border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
                                    {recentApplications && recentApplications.length > 0 ? (
                                        <div className="space-y-3">
                                            {recentApplications.map(application => (
                                                <div key={application.id} className="border rounded p-3">
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex-1">
                                                            <Link
                                                                href={`/jobs/${application.job_posting_id}`}
                                                                className="font-medium text-gray-900 hover:text-blue-600"
                                                            >
                                                                {application.job_posting?.title}
                                                            </Link>
                                                            <p className="text-sm text-gray-600">
                                                                {application.job_posting?.recruiter?.company_name}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                Applied on {formatDate(application.applied_at)}
                                                            </p>
                                                        </div>
                                                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(application.status)}`}>
                                                            {application.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">No applications yet. Start applying to jobs!</p>
                                    )}
                                    {recentApplications && recentApplications.length > 0 && (
                                        <Link
                                            href="/jobseeker/applications"
                                            className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm"
                                        >
                                            View All Applications →
                                        </Link>
                                    )}
                                </div>

                                <div className="bg-white border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-4">Recommended Jobs</h3>
                                    {jobRecommendations && jobRecommendations.length > 0 ? (
                                        <div className="space-y-3">
                                            {jobRecommendations.slice(0, 3).map(job => (
                                                <div key={job.id} className="border rounded p-3">
                                                    <Link
                                                        href={`/jobs/${job.id}`}
                                                        className="font-medium text-gray-900 hover:text-blue-600"
                                                    >
                                                        {job.title}
                                                    </Link>
                                                    <p className="text-sm text-gray-600">
                                                        {job.recruiter?.company_name} • {job.location}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {job.salary_range}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">No recommendations yet. Complete your profile for personalized suggestions.</p>
                                    )}
                                    <Link
                                        href="/jobs"
                                        className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                        Browse All Jobs →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}