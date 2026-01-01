import Layout from '../../Components/Layout'
import { useState, useEffect } from 'react'
import { Link, router } from '@inertiajs/react'

export default function Index({ auth, jobs, categories, filters }) {
    const safeFilters = filters || {}
    const [searchTerm, setSearchTerm] = useState(safeFilters.search || '')
    const [selectedCategory, setSelectedCategory] = useState(safeFilters.category || '')
    const [selectedLocation, setSelectedLocation] = useState(safeFilters.location || '')
    const [selectedJobType, setSelectedJobType] = useState(safeFilters.job_type || '')

    const jobTypes = [
        { value: 'full-time', label: 'Full Time' },
        { value: 'part-time', label: 'Part Time' },
        { value: 'contract', label: 'Contract' },
        { value: 'freelance', label: 'Freelance' }
    ]

    const handleSearch = () => {
        const params = {
            search: searchTerm || '',
            category: selectedCategory || '',
            location: selectedLocation || '',
            job_type: selectedJobType || ''
        }

        // Remove empty parameters
        Object.keys(params).forEach(key => {
            if (params[key] === '') {
                delete params[key]
            }
        })

        router.get('/jobs', params, {
            preserveState: true,
            replace: true
        })
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount)
    }

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('')
        setSelectedLocation('')
        setSelectedJobType('')
        router.get('/jobs', {}, { preserveState: true, replace: true })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Find Your Dream Job</h1>
                        <p className="text-gray-600 mt-2">Discover opportunities that match your skills and interests</p>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            {/* Search */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Search Jobs
                                </label>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Job title, company..."
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    placeholder="City, Country"
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Job Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Type
                                </label>
                                <select
                                    value={selectedJobType}
                                    onChange={(e) => setSelectedJobType(e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">All Types</option>
                                    {jobTypes.map(type => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleSearch}
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Search Jobs
                            </button>
                            <button
                                onClick={clearFilters}
                                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-4">
                        {jobs.data.length === 0 ? (
                            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                                <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4" />
                                </svg>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">No jobs found</h3>
                                <p className="mt-2 text-gray-600">Try adjusting your search criteria or check back later.</p>
                            </div>
                        ) : (
                            jobs.data.map(job => (
                                <div key={job.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <Link
                                                href={`/jobs/${job.id}`}
                                                className="text-xl font-semibold text-gray-900 hover:text-blue-600"
                                            >
                                                {job.title}
                                            </Link>
                                            <p className="text-gray-600 mt-1">
                                                {job.recruiter?.company_name || 'Company'} • {job.location}
                                            </p>
                                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                                <span className="capitalize">{job.job_type ? job.job_type.replace('-', ' ') : 'Not specified'}</span>
                                                <span>•</span>
                                                <span>{job.experience_level ? job.experience_level + ' level' : 'Level not specified'}</span>
                                                <span>•</span>
                                                <span>{formatCurrency(job.salary_min)} - {formatCurrency(job.salary_max)}</span>
                                            </div>
                                            <p className="text-gray-700 mt-3 line-clamp-2">
                                                {job.description ? job.description.substring(0, 200) + '...' : 'No description available'}
                                            </p>
                                        </div>
                                        <div className="ml-4">
                                            <Link
                                                href={`/jobs/${job.id}`}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    {jobs.last_page > 1 && (
                        <div className="mt-8 flex justify-center">
                            <div className="flex space-x-1">
                                {jobs.links.map((link, index) => (
                                    link.url && (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className={`px-3 py-2 text-sm border rounded-md ${
                                                link.active
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    )
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}