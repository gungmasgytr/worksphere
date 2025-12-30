import { Link } from '@inertiajs/react'

export default function Header({ user }) {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-[1450px] mx-auto sm:px-3 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-3xl font-bold text-[#404145]">
                        WorkSphere<span className='text-[#2196F3]'>.</span>
                    </Link>
                    
                    <div className='items-center justify-center space-x-24 font-medium text-lg'>
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="#vacancy" className="text-gray-700 hover:text-blue-600">
                            Vacancy
                        </Link>
                        <Link href="#faq" method="post" className="text-gray-700 hover:text-blue-600">
                            FAQ
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link href={user.role === 'perusahaan' ? '/recruiter/dashboard' : '/jobseeker/dashboard'} className="text-gray-700 hover:text-blue-600">
                                    Dashboard
                                </Link>
                                <Link href="/profile" className="text-gray-700 hover:text-blue-600">
                                    Profile
                                </Link>
                                <Link href="/logout" method="post" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-700 hover:text-blue-600">
                                    Login
                                </Link>
                                <Link href="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}