import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function Register({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user'
    })

    const submit = (e) => {
        e.preventDefault()
        post('/register')
    }

    return (
        <div className="min-h-[120vh] flex items-center justify-center bg-white">
            <div className='max-w-[1100px] w-full flex flex-row border border-gray-300 rounded-[20px] shadow-md'>
                <div className="w-full bg-[url('/assets/images/auth/bg-auth.png')] bg-no-repeat bg-cover rounded-l-[20px] flex flex-col justify-between">
                    <h2 className="mt-36 ml-16 text-left text-6xl font-extrabold text-white">
                        Join us now!
                    </h2>
                    <img src="/assets/images/auth/women-with-tab.png" alt="" width={1000} height={1000} className=""/>
                </div>
                <div className="w-full pl-8 pb-4">
                    <h2 className="mt-10 text-left text-3xl font-extrabold text-gray-900">
                        Create new Account
                    </h2>
                    <p className='text-black text-[20px]'>
                        Already have an account? 
                        <span className='text-blue-600 hover:text-blue-500 cursor-pointer ml-2 hover:underline' onClick={() => window.location.href = '/login'}>
                            Sign in
                        </span>
                    </p>
                    <form onSubmit={submit} className='space-y-4 pr-8'>
                        <div className='mt-6'>
                            <label htmlFor='name' className='text-lg text-gray-900 font-medium'>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Full Name"
                                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor='email' className='text-lg text-gray-900 font-medium'>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Email address"
                                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>
                        <div>
                            <label htmlFor='role' className='text-lg text-gray-900 font-medium'>Role</label>
                            <div>
                                <select
                                    id="role"
                                    name="role"
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                    className="relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="user">Job Seeker</option>
                                    <option value="perusahaan">Recruiter/Company</option>
                                </select>
                                {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor='password' className='text-lg text-gray-900 font-medium'>Password</label>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                    className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor='password_confirmation' className='text-lg text-gray-900 font-medium'>Confirm Password</label>
                            <div>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    autoComplete="new-password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Confirm Password"
                                    className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#757575] bg-[#E9F5FE] hover:bg-[#d3ecff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d3ecff] disabled:opacity-50"
                            >
                                {processing ? 'Creating account...' : 'Sign up'}
                            </button>
                        </div>
                        <div>
                            <p className='py-4 text-[#999999] text-left font-light'>
                                By joining, you agree to the WorkSphere&ensp; 
                                <span className='text-blue-600 hover:text-blue-500 cursor-pointer hover:underline font-bold' onClick={() => window.location.href = '/'}>
                                    Terms of Service
                                </span>  
                                &ensp;and to occasionally receive emails from us. Please read our&ensp; 
                                <span className='text-blue-600 hover:text-blue-500 cursor-pointer font-bold hover:underline' onClick={() => window.location.href = '/'}>
                                    Privacy Policy
                                </span> 
                                &ensp;to learn how we use your personal data.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}