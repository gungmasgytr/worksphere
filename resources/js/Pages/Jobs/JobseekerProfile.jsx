import Layout from '../../Components/Layout'
import { Link } from '@inertiajs/react'

export default function JobseekerProfile({ auth, jobseeker }) {
    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <Link
                                    href="/recruiter/jobs"
                                    className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
                                >
                                    ← Back to Jobs
                                </Link>
                                <h1 className="text-3xl font-bold text-gray-900">{jobseeker.user.name}'s Profile</h1>
                                <p className="text-gray-600 mt-1">Jobseeker Profile Details</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                                <p className="mt-1 text-sm text-gray-900">{jobseeker.user.name}</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                                <p className="mt-1 text-sm text-gray-900">{jobseeker.user.email}</p>
                                            </div>
                                            {jobseeker.phone && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                                    <p className="mt-1 text-sm text-gray-900">{jobseeker.phone}</p>
                                                </div>
                                            )}
                                            {jobseeker.location && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                                    <p className="mt-1 text-sm text-gray-900">{jobseeker.location}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Professional Information */}
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Information</h2>
                                        <div className="space-y-3">
                                            {jobseeker.skills && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                                                    <p className="mt-1 text-sm text-gray-900">{jobseeker.skills}</p>
                                                </div>
                                            )}
                                            {jobseeker.experience && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                                                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">{jobseeker.experience}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Bio and Additional Info */}
                                <div className="space-y-6">
                                    {jobseeker.bio && (
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bio</h2>
                                            <p className="text-gray-700 whitespace-pre-line">{jobseeker.bio}</p>
                                        </div>
                                    )}

                                    {jobseeker.resume_path && (
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resume</h2>
                                            <a
                                                href={`/storage/${jobseeker.resume_path}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                            >
                                                Download Resume
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}