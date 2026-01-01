import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'

export default function Jobseeker({ auth, profile }) {
    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                                    <p className="text-gray-600 mt-1">Manage your job seeker profile</p>
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
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                                                    <p className="text-gray-900">{profile.full_name}</p>
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
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Skills</label>
                                                    <p className="text-gray-900">{profile.skills || 'Not provided'}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Experience Level</label>
                                                    <p className="text-gray-900">{profile.experience ? 'Experienced' : 'Not specified'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bio</h3>
                                        <p className="text-gray-900 whitespace-pre-line">
                                            {profile.bio || 'No bio provided yet. Add a bio to tell employers about yourself.'}
                                        </p>
                                    </div>

                                    {profile.experience && (
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
                                            <p className="text-gray-900 whitespace-pre-line">{profile.experience}</p>
                                        </div>
                                    )}

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume</h3>
                                        {profile.resume_path ? (
                                            <div className="flex items-center space-x-3">
                                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Resume uploaded</p>
                                                    <p className="text-sm text-gray-500">Click to download</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">No resume uploaded yet.</p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No profile found</h3>
                                    <p className="mt-2 text-gray-600">Create your profile to start applying for jobs.</p>
                                    <div className="mt-6">
                                        <Link
                                            href="/profile/edit"
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Create Profile
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