import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'
export default function Recruiter({ auth, user, profile, stats, recentJobs, recentApplications }) {
    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">Recruiter Dashboard</h1>
                                <p className="text-gray-600">Welcome back, {user.name}!</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-blue-900">Active Jobs</h3>
                                    <p className="text-3xl font-bold text-blue-600">{stats.active_jobs}</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-green-900">Applications</h3>
                                    <p className="text-3xl font-bold text-green-600">{stats.applications}</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-purple-900">Views</h3>
                                    <p className="text-3xl font-bold text-purple-600">{stats.views}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                                    <div className="space-y-3 flex flex-col">
                                        <Link className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 items-center justify-center flex" href="/recruiter/jobs/create">
                                            Post New Job
                                        </Link>
                                        <Link href="/recruiter/jobs" className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 items-center justify-center flex">
                                            Manage Jobs
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">Company Profile</h3>
                                    {profile ? (
                                        <div className="space-y-2">
                                            <p><strong>Company:</strong> {profile.company_name}</p>
                                            <p><strong>Location:</strong> {profile.location || 'Not set'}</p>
                                            <p><strong>Website:</strong> {profile.website || 'Not set'}</p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">Complete your company profile to get started.</p>
                                    )}
                                    <a href="/profile/edit" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                                        {profile ? 'Edit Profile' : 'Complete Profile'} →
                                    </a>
                                </div>
                            </div>

                            {/* Recent Jobs Section */}
                            <div className="mt-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold">Recent Job Postings</h3>
                                            <Link href="/recruiter/jobs" className="text-blue-600 hover:text-blue-800">View All</Link>
                                        </div>
                                        {recentJobs.length > 0 ? (
                                            <div className="space-y-4">
                                                {recentJobs.map((job) => (
                                                    <div key={job.id} className="border-b pb-4">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="font-semibold">{job.title}</h4>
                                                                <p className="text-sm text-gray-600">{job.location} • {job.category?.name}</p>
                                                                <p className="text-sm text-gray-500">Status: {job.status}</p>
                                                            </div>
                                                            <Link href={`/recruiter/jobs/${job.id}`} className="text-blue-600 hover:text-blue-800">View</Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">No job postings yet. <Link href="/recruiter/jobs/create" className="text-blue-600">Create your first job</Link></p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Applications Section */}
                            <div className="mt-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold">Recent Applications</h3>
                                            <Link href="/recruiter/applications" className="text-blue-600 hover:text-blue-800">View All</Link>
                                        </div>
                                        {recentApplications.length > 0 ? (
                                            <div className="space-y-4">
                                                {recentApplications.map((application) => (
                                                    <div key={application.id} className="border-b pb-4">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="font-semibold">{application.jobPosting?.title}</h4>
                                                                <p className="text-sm text-gray-600">Applicant: {application.jobseeker?.user?.name}</p>
                                                                <p className="text-sm text-gray-500">Status: {application.status} • Applied: {new Date(application.applied_at).toLocaleDateString()}</p>
                                                            </div>
                                                            <Link href={`/recruiter/applications/${application.id}`} className="text-blue-600 hover:text-blue-800">Review</Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">No applications yet.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}