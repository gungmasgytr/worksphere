import Layout from '../../Components/Layout'

export default function Jobseeker({ auth, user, profile }) {
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
                                    <p className="text-3xl font-bold text-blue-600">0</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-green-900">Interviews</h3>
                                    <p className="text-3xl font-bold text-green-600">0</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-purple-900">Profile Views</h3>
                                    <p className="text-3xl font-bold text-purple-600">0</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                                    <div className="space-y-3">
                                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                                            Browse Jobs
                                        </button>
                                        <button className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
                                            My Applications
                                        </button>
                                        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                                            Update Resume
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
                                    {profile ? (
                                        <div className="space-y-2">
                                            <p><strong>Name:</strong> {profile.full_name}</p>
                                            <p><strong>Location:</strong> {profile.location || 'Not set'}</p>
                                            <p><strong>Skills:</strong> {profile.skills || 'Not set'}</p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">Complete your profile to attract employers.</p>
                                    )}
                                    <a href="/profile/edit" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                                        {profile ? 'Edit Profile' : 'Complete Profile'} →
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-4">Recent Job Recommendations</h3>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p className="text-gray-600">No job recommendations yet. Complete your profile to get personalized job suggestions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}