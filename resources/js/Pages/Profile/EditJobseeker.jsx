import Layout from '../../Components/Layout'
import { useForm } from '@inertiajs/react'

export default function EditJobseeker({ auth, profile }) {
    const { data, setData, put, processing, errors } = useForm({
        full_name: profile?.full_name || '',
        bio: profile?.bio || '',
        phone: profile?.phone || '',
        location: profile?.location || '',
        skills: profile?.skills || '',
        experience: profile?.experience || '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put('/profile', {
            onSuccess: () => {
                // Handle success
            }
        })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">Edit Job Seeker Profile</h1>
                                <p className="text-gray-600 mt-2">Complete your profile to attract employers</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="full_name"
                                            value={data.full_name}
                                            onChange={(e) => setData('full_name', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        {errors.full_name && <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="City, Country"
                                    />
                                    {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                                </div>

                                <div>
                                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                        Bio
                                    </label>
                                    <textarea
                                        id="bio"
                                        rows={4}
                                        value={data.bio}
                                        onChange={(e) => setData('bio', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Tell employers about yourself..."
                                    />
                                    {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio}</p>}
                                </div>

                                <div>
                                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                                        Skills
                                    </label>
                                    <input
                                        type="text"
                                        id="skills"
                                        value={data.skills}
                                        onChange={(e) => setData('skills', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., JavaScript, React, Node.js (separate with commas)"
                                    />
                                    {errors.skills && <p className="mt-1 text-sm text-red-600">{errors.skills}</p>}
                                </div>

                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                                        Experience
                                    </label>
                                    <textarea
                                        id="experience"
                                        rows={4}
                                        value={data.experience}
                                        onChange={(e) => setData('experience', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Describe your work experience..."
                                    />
                                    {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                                </div>

                                <div className="flex items-center justify-between pt-6">
                                    <a
                                        href="/profile"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        ← Back to Profile
                                    </a>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                    >
                                        {processing ? 'Saving...' : 'Save Profile'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}