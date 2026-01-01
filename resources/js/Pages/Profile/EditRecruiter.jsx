import Layout from '../../Components/Layout'
import { useForm } from '@inertiajs/react'

export default function EditRecruiter({ auth, profile }) {
    const { data, setData, put, processing, errors } = useForm({
        company_name: profile?.company_name || '',
        company_description: profile?.company_description || '',
        website: profile?.website || '',
        location: profile?.location || '',
        phone: profile?.phone || '',
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
                                <h1 className="text-3xl font-bold text-gray-900">Edit Company Profile</h1>
                                <p className="text-gray-600 mt-2">Update your company information</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="company_name"
                                            value={data.company_name}
                                            onChange={(e) => setData('company_name', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        {errors.company_name && <p className="mt-1 text-sm text-red-600">{errors.company_name}</p>}
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
                                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="https://www.example.com"
                                    />
                                    {errors.website && <p className="mt-1 text-sm text-red-600">{errors.website}</p>}
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
                                    <label htmlFor="company_description" className="block text-sm font-medium text-gray-700">
                                        Company Description
                                    </label>
                                    <textarea
                                        id="company_description"
                                        rows={6}
                                        value={data.company_description}
                                        onChange={(e) => setData('company_description', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Describe your company, mission, and what makes you unique..."
                                    />
                                    {errors.company_description && <p className="mt-1 text-sm text-red-600">{errors.company_description}</p>}
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