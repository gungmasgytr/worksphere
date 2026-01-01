import Layout from '../../Components/Layout'
import { useForm, Link } from '@inertiajs/react'

export default function Edit({ auth, job, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        title: job.title || '',
        description: job.description || '',
        requirements: job.requirements || '',
        location: job.location || '',
        salary_min: job.salary_min || '',
        salary_max: job.salary_max || '',
        job_type: job.job_type || '',
        experience_level: job.experience_level || '',
        category_id: job.category_id || '',
        deadline: job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : '',
        status: job.status || 'active',
    })

    const jobTypes = [
        { value: 'full-time', label: 'Full Time' },
        { value: 'part-time', label: 'Part Time' },
        { value: 'contract', label: 'Contract' },
        { value: 'freelance', label: 'Freelance' }
    ]

    const experienceLevels = [
        { value: 'entry', label: 'Entry Level' },
        { value: 'mid', label: 'Mid Level' },
        { value: 'senior', label: 'Senior Level' },
        { value: 'expert', label: 'Expert Level' }
    ]

    const statuses = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'closed', label: 'Closed' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        put(`/recruiter/jobs/${job.id}`)
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900">Edit Job Posting</h1>
                                        <p className="text-gray-600 mt-2">Update your job posting details</p>
                                    </div>
                                    <Link
                                        href="/recruiter/jobs"
                                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        ← Back to Jobs
                                    </Link>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Basic Information */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) => setData('title', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Category *
                                            </label>
                                            <select
                                                value={data.category_id}
                                                onChange={(e) => setData('category_id', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map(category => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category_id && <p className="mt-1 text-sm text-red-600">{errors.category_id}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Location *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.location}
                                                onChange={(e) => setData('location', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                            {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Job Type *
                                            </label>
                                            <select
                                                value={data.job_type}
                                                onChange={(e) => setData('job_type', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            >
                                                <option value="">Select Job Type</option>
                                                {jobTypes.map(type => (
                                                    <option key={type.value} value={type.value}>
                                                        {type.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.job_type && <p className="mt-1 text-sm text-red-600">{errors.job_type}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Experience Level *
                                            </label>
                                            <select
                                                value={data.experience_level}
                                                onChange={(e) => setData('experience_level', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            >
                                                <option value="">Select Experience Level</option>
                                                {experienceLevels.map(level => (
                                                    <option key={level.value} value={level.value}>
                                                        {level.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.experience_level && <p className="mt-1 text-sm text-red-600">{errors.experience_level}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Minimum Salary
                                            </label>
                                            <input
                                                type="number"
                                                value={data.salary_min}
                                                onChange={(e) => setData('salary_min', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                min="0"
                                            />
                                            {errors.salary_min && <p className="mt-1 text-sm text-red-600">{errors.salary_min}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Maximum Salary
                                            </label>
                                            <input
                                                type="number"
                                                value={data.salary_max}
                                                onChange={(e) => setData('salary_max', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                min="0"
                                            />
                                            {errors.salary_max && <p className="mt-1 text-sm text-red-600">{errors.salary_max}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Status *
                                            </label>
                                            <select
                                                value={data.status}
                                                onChange={(e) => setData('status', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            >
                                                {statuses.map(status => (
                                                    <option key={status.value} value={status.value}>
                                                        {status.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Application Deadline
                                            </label>
                                            <input
                                                type="date"
                                                value={data.deadline}
                                                onChange={(e) => setData('deadline', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                            {errors.deadline && <p className="mt-1 text-sm text-red-600">{errors.deadline}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description *
                                        </label>
                                        <textarea
                                            rows={6}
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                                    </div>
                                </div>

                                {/* Requirements */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Requirements
                                        </label>
                                        <textarea
                                            rows={6}
                                            value={data.requirements}
                                            onChange={(e) => setData('requirements', e.target.value)}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.requirements && <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center justify-end pt-6 border-t">
                                    <Link
                                        href="/recruiter/jobs"
                                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 mr-4"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                    >
                                        {processing ? 'Updating...' : 'Update Job Posting'}
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