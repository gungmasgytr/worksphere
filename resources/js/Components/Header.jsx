import { Link, useForm } from '@inertiajs/react'
import { useState } from 'react'

export default function Header({ user }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { post } = useForm()

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLogout = () => {
        post('/logout')
    }

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl lg:text-3xl font-bold text-[#404145]">
                        WorkSphere<span className='text-[#2196F3]'>.</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center justify-center space-x-8 font-medium text-lg'>
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/jobs" className="text-gray-700 hover:text-blue-600">
                            Vacancy
                        </Link>
                        <Link href="#faq" className="text-gray-700 hover:text-blue-600">
                            FAQ
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Desktop Auth Section */}
                    <nav className="hidden lg:flex items-center space-x-4">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="border-2 rounded-full border-[#2196F3] p-2 font-bold text-[#2196F3] hover:text-white hover:bg-[#2196F3] transition-colors duration-200"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33325 15C3.33325 14.1159 3.68444 13.2681 4.30956 12.6429C4.93468 12.0178 5.78253 11.6666 6.66659 11.6666H13.3333C14.2173 11.6666 15.0652 12.0178 15.6903 12.6429C16.3154 13.2681 16.6666 14.1159 16.6666 15C16.6666 15.442 16.491 15.8659 16.1784 16.1785C15.8659 16.491 15.4419 16.6666 14.9999 16.6666H4.99992C4.55789 16.6666 4.13397 16.491 3.82141 16.1785C3.50885 15.8659 3.33325 15.442 3.33325 15Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                        <path d="M10 8.33331C11.3807 8.33331 12.5 7.21402 12.5 5.83331C12.5 4.4526 11.3807 3.33331 10 3.33331C8.61929 3.33331 7.5 4.4526 7.5 5.83331C7.5 7.21402 8.61929 8.33331 10 8.33331Z" stroke="currentColor" stroke-width="1.5"/>
                                    </svg>
                                </button>
                                
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                                        <Link
                                            href={user.is_recruiter ? '/recruiter/dashboard' : '/jobseeker/dashboard'}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout()
                                                setIsDropdownOpen(false)
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link href="/register" className="text-[#999999] hover:text-gray-800 font-semibold text-sm lg:text-base">
                                    Become a recruiter
                                </Link>
                                <Link href="/login" className="text-[#999999] hover:text-gray-800 font-semibold text-sm lg:text-base">
                                    Sign in
                                </Link>
                                <Link href="/register" className="bg-white text-[#2196F3] px-3 lg:px-4 py-2 hover:bg-[#2196F3] border-2 border-[#2196F3] rounded-lg font-bold hover:text-white text-sm lg:text-base">
                                    Join
                                </Link>
                            </>
                        )}
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 py-4">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                Vacancy
                            </Link>
                            <Link href="#faq" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                FAQ
                            </Link>
                            
                            <div className="border-t border-gray-200 pt-4">
                                {user ? (
                                    <div className="space-y-2">
                                        <Link
                                            href={user.is_recruiter ? '/recruiter/dashboard' : '/jobseeker/dashboard'}
                                            className="block text-gray-700 hover:text-blue-600 font-medium"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout()
                                                setIsMobileMenuOpen(false)
                                            }}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Link href="/register" className="block text-[#999999] hover:text-gray-800 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                                            Become a recruiter
                                        </Link>
                                        <Link href="/login" className="block text-[#999999] hover:text-gray-800 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                                            Sign in
                                        </Link>
                                        <Link href="/register" className="block bg-[#2196F3] text-white px-4 py-2 rounded-lg font-bold text-center hover:bg-blue-700" onClick={() => setIsMobileMenuOpen(false)}>
                                            Join
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}