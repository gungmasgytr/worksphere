import Layout from '../../Components/Layout'
import { Link, router } from '@inertiajs/react'
import { useState } from 'react'

export default function Applications({ auth, job, applications }) {
    const [contactModal, setContactModal] = useState({ open: false, application: null })
    const [contactForm, setContactForm] = useState({ subject: '', message: '' })
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'reviewed':
                return 'bg-blue-100 text-blue-800'
            case 'shortlisted':
                return 'bg-green-100 text-green-800'
            case 'rejected':
                return 'bg-red-100 text-red-800'
            case 'hired':
                return 'bg-purple-100 text-purple-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const handleStatusChange = (applicationId, newStatus) => {
        router.put(`/recruiter/applications/${applicationId}/status`, {
            status: newStatus
        }, {
            preserveScroll: true,
            onSuccess: () => {
                // Status updated successfully
            }
        })
    }

    const handleContactCandidate = (application) => {
        setContactModal({ open: true, application })
        setContactForm({
            subject: `Regarding your application for ${job.title}`,
            message: `Dear ${application.jobseeker.user.name},\n\nThank you for applying for the ${job.title} position at ${auth.user.recruiterProfile?.company_name}.\n\nWe would like to discuss your application further.\n\nBest regards,\n${auth.user.name}\n${auth.user.recruiterProfile?.company_name}`
        })
    }

    const submitContactForm = (e) => {
        e.preventDefault()
        router.post(`/recruiter/applications/${contactModal.application.id}/contact`, contactForm, {
            preserveScroll: true,
            onSuccess: () => {
                setContactModal({ open: false, application: null })
                setContactForm({ subject: '', message: '' })
            }
        })
    }

    return (
        <Layout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900">Applications for: {job.title}</h1>
                                        <p className="text-gray-600 mt-1">{applications.length} application{applications.length !== 1 ? 's' : ''} received</p>
                                    </div>
                                    <Link
                                        href="/recruiter/jobs"
                                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        ← Back to Jobs
                                    </Link>
                                </div>
                            </div>

                            {applications.length === 0 ? (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No applications yet</h3>
                                    <p className="mt-2 text-gray-600">Applications will appear here once candidates apply for this job.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {applications.map(application => (
                                        <div key={application.id} className="border rounded-lg p-6">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl font-semibold text-gray-900">
                                                            {application.jobseeker.user.name}
                                                        </h3>
                                                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(application.status)}`}>
                                                            {application.status}
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                                                            <div className="space-y-1 text-sm text-gray-600">
                                                                <p><strong>Email:</strong> {application.jobseeker.user.email}</p>
                                                                {application.jobseeker.phone && (
                                                                    <p><strong>Phone:</strong> {application.jobseeker.phone}</p>
                                                                )}
                                                                {application.jobseeker.location && (
                                                                    <p><strong>Location:</strong> {application.jobseeker.location}</p>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h4 className="font-medium text-gray-900 mb-2">Professional Information</h4>
                                                            <div className="space-y-1 text-sm text-gray-600">
                                                                {application.jobseeker.skills && (
                                                                    <p><strong>Skills:</strong> {application.jobseeker.skills}</p>
                                                                )}
                                                                {application.jobseeker.experience && (
                                                                    <p><strong>Experience:</strong> {application.jobseeker.experience.substring(0, 100)}...</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {application.jobseeker.bio && (
                                                        <div className="mb-4">
                                                            <h4 className="font-medium text-gray-900 mb-2">Bio</h4>
                                                            <p className="text-gray-700 text-sm">{application.jobseeker.bio}</p>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>Applied on: {formatDate(application.applied_at)}</span>
                                                    </div>
                                                </div>

                                                <div className="ml-6 flex flex-col gap-2">
                                                    <select
                                                        value={application.status}
                                                        onChange={(e) => handleStatusChange(application.id, e.target.value)}
                                                        className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="reviewed">Reviewed</option>
                                                        <option value="shortlisted">Shortlisted</option>
                                                        <option value="rejected">Rejected</option>
                                                        <option value="hired">Hired</option>
                                                    </select>

                                                    <Link
                                                        href={`/recruiter/jobseekers/${application.jobseeker.id}`}
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm text-center"
                                                    >
                                                        View Full Profile
                                                    </Link>

                                                    <button
                                                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
                                                        onClick={() => handleContactCandidate(application)}
                                                    >
                                                        Contact Candidate
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {contactModal.open && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Contact {contactModal.application?.jobseeker.user.name}
                            </h3>
                            <form onSubmit={submitContactForm}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        value={contactForm.subject}
                                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        value={contactForm.message}
                                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                                        rows={6}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setContactModal({ open: false, application: null })}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}