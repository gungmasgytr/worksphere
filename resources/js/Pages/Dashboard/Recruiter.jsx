import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'
export default function Recruiter({ auth, user, profile }) {
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
                                    <p className="text-3xl font-bold text-blue-600">0</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-green-900">Applications</h3>
                                    <p className="text-3xl font-bold text-green-600">0</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-purple-900">Views</h3>
                                    <p className="text-3xl font-bold text-purple-600">0</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}