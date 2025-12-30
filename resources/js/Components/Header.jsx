import { Link } from '@inertiajs/react'

export default function Header({ user }) {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        WorkSphere
                    </Link>
                    
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