import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'

export default function Recruiter({ auth, profile }) {
    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">Company Profile</h1>
                                    <p className="text-gray-600 mt-1">Manage your company information</p>
                                </div>
                                <Link
                                    href="/profile/edit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Edit Profile
                                </Link>
                            </div>

                            {profile ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Company Name</label>
                                                    <p className="text-gray-900">{profile.company_name}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Phone</label>
                                                    <p className="text-gray-900">{profile.phone || 'Not provided'}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Location</label>
                                                    <p className="text-gray-900">{profile.location || 'Not provided'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Online Presence</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Website</label>
                                                    {profile.website ? (
                                                        <a
                                                            href={profile.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            {profile.website}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-900">Not provided</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Description</h3>
                                        <p className="text-gray-900 whitespace-pre-line">
                                            {profile.company_description || 'No company description provided yet. Add a description to attract talent.'}
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-blue-600">0</p>
                                                <p className="text-sm text-gray-600">Active Jobs</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-green-600">0</p>
                                                <p className="text-sm text-gray-600">Applications</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-purple-600">0</p>
                                                <p className="text-sm text-gray-600">Hired</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No company profile found</h3>
                                    <p className="mt-2 text-gray-600">Create your company profile to start posting jobs.</p>
                                    <div className="mt-6">
                                        <Link
                                            href="/profile/edit"
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Create Company Profile
                                        </Link>
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