import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function Login({ auth }) {
    const [selectedRole, setSelectedRole] = useState(null)
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false
    })

    const submit = (e) => {
        e.preventDefault()
        post('/login')
    }

    const selectRole = (role) => {
        setSelectedRole(role)
    }

    const backToRoleSelection = () => {
        setSelectedRole(null)
        setData({
            email: '',
            password: '',
            remember: false
        })
    }

    if (!selectedRole) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="min-h-[120vh] flex items-center justify-center bg-white">
                    <div className='max-w-[1100px] w-full flex flex-row border border-gray-300 rounded-[20px] shadow-md'>
                        <div className="w-full bg-[url('/assets/images/auth/bg-auth.png')] bg-no-repeat bg-cover rounded-l-[20px]">
                            <h2 className="mt-16 ml-16 text-left text-3xl font-extrabold text-white">
                                Join us now!
                            </h2>
                            <img src="/assets/images/auth/women-with-tab.png" alt=""/>
                        </div>
                        <div className="w-full pl-8 pb-4">
                            <h2 className="mt-10 text-left text-3xl font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className='text-black text-[20px]'>
                                Don’t have an account? 
                                <span className='text-blue-600 hover:text-blue-500 cursor-pointer ml-2 hover:underline' onClick={() => window.location.href = '/register'}>
                                    Join here
                                </span>
                            </p>
                            <div className="mt-16 space-y-8 pr-8">
                                <button
                                    onClick={() => selectRole('jobseeker')}
                                    className="group relative w-full flex justify-center py-3 px-4  border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-2 border-[#1E87DB]"
                                >
                                    Sign in as Job Seeker
                                </button>
                                <button
                                    onClick={() => selectRole('recruiter')}
                                    className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-[#1E87DB] hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:text-blue-600"
                                >
                                    Sign in as Recruiter
                                </button>
                            </div>
                            <div className='pt-40 pr-8 pl-4'>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="min-h-[120vh] flex items-center justify-center bg-white">
                    <div className='max-w-[1100px] w-full flex flex-row border border-gray-300 rounded-[20px] shadow-md'>
                        <div className="w-full bg-[url('/assets/images/auth/bg-auth.png')] bg-no-repeat bg-cover rounded-l-[20px]">
                            <h2 className="mt-16 ml-16 text-left text-3xl font-extrabold text-white">
                                Join us now!
                            </h2>
                            <img src="/assets/images/auth/women-with-tab.png" alt="" width={1000} height={1000}/>
                        </div>
                    <div className="max-w-[1100px] w-full space-y-8 px-5">
                        <h2 className="mt-10 text-left text-3xl font-extrabold text-gray-900">
                            Sign in as {selectedRole === 'jobseeker' ? 'Job Seeker' : 'Recruiter'}
                        </h2>
                        <p className='text-black text-[20px]'>
                            Don’t have an account? 
                            <span className='text-blue-600 hover:text-blue-500 cursor-pointer ml-2 hover:underline' onClick={() => window.location.href = '/register'}>
                                Join here
                            </span>
                        </p>
                        <form className="mt-8 space-y-6" onSubmit={submit}>
                            <div className="rounded-md shadow-sm space-y-4">
                                <div>
                                    <label className='text-lg text-gray-900 font-medium'>Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Email address"
                                        className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                </div>
                                <div>
                                    <label className='text-lg text-gray-900 font-medium'>Password</label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                        className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    {processing ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}