import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function Login({ auth }) {
    const [selectedRole, setSelectedRole] = useState(null)
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
        selectedRole: null
    })

    const submit = (e) => {
        e.preventDefault()
        post('/login')
    }

    const selectRole = (role) => {
        setSelectedRole(role)
        setData('selectedRole', role)
    }

    const backToRoleSelection = () => {
        setSelectedRole(null)
        setData({
            email: '',
            password: '',
            remember: false,
            selectedRole: null
        })
    }

    if (!selectedRole) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white px-4">
                <div className="min-h-[120vh] flex items-center justify-center bg-white w-full max-w-6xl">
                    <div className='w-full flex flex-col lg:flex-row border border-gray-300 rounded-[20px] shadow-md'>
                        <div className="w-full lg:w-1/2 bg-[url('/assets/images/auth/bg-auth.png')] bg-no-repeat bg-cover rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-t-none min-h-[300px] lg:min-h-[600px] flex flex-col justify-center items-center">
                            <h2 className="text-center lg:text-left text-2xl lg:text-3xl font-extrabold text-white px-4">
                                Join us now!
                            </h2>
                            <img src="/assets/images/auth/women-with-tab.png" alt="" className="w-full max-w-sm lg:max-w-md mt-4 lg:mt-8"/>
                        </div>
                        <div className="w-full lg:w-1/2 p-4 lg:pl-8 lg:pb-4">
                            <h2 className="mt-6 lg:mt-10 text-center lg:text-left text-2xl lg:text-3xl font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className='text-black text-base lg:text-[20px] text-center lg:text-left'>
                                Don't have an account? 
                                <span className='text-blue-600 hover:text-blue-500 cursor-pointer ml-2 hover:underline' onClick={() => window.location.href = '/register'}>
                                    Join here
                                </span>
                            </p>
                            <div className="mt-8 lg:mt-16 space-y-6 lg:space-y-8 px-4 lg:px-0 lg:pr-8">
                                <button
                                    onClick={() => selectRole('jobseeker')}
                                    className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-2 border-[#1E87DB]"
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
                            <div className='pt-8 lg:pt-40 px-4 lg:px-0 lg:pr-8 lg:pl-4'>
                                <p className='py-4 text-[#999999] text-center lg:text-left text-sm lg:text-base font-light'>
                                    By joining, you agree to the WorkSphere&nbsp; 
                                    <span className='text-blue-600 hover:text-blue-500 cursor-pointer hover:underline font-bold' onClick={() => window.location.href = '/'}>
                                        Terms of Service
                                    </span>  
                                    &nbsp;and to occasionally receive emails from us. Please read our&nbsp; 
                                    <span className='text-blue-600 hover:text-blue-500 cursor-pointer font-bold hover:underline' onClick={() => window.location.href = '/'}>
                                        Privacy Policy
                                    </span> 
                                    &nbsp;to learn how we use your personal data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="min-h-[120vh] flex items-center justify-center bg-white w-full max-w-6xl">
                    <div className='w-full flex flex-col lg:flex-row border border-gray-300 rounded-[20px] shadow-md'>
                        <div className="w-full lg:w-1/2 bg-[url('/assets/images/auth/bg-auth.png')] bg-no-repeat bg-cover rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-t-none min-h-[300px] lg:min-h-[600px] flex flex-col justify-center items-center">
                            <h2 className="text-center lg:text-left text-2xl lg:text-3xl font-extrabold text-white px-4">
                                Join us now!
                            </h2>
                            <img src="/assets/images/auth/women-with-tab.png" alt="" className="w-full max-w-sm lg:max-w-md mt-4 lg:mt-8"/>
                        </div>
                    <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 p-4 lg:px-5">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={backToRoleSelection}
                                className="text-blue-600 hover:text-blue-500 text-sm lg:text-base"
                            >
                                ← Back to role selection
                            </button>
                        </div>
                        <h2 className="text-center lg:text-left text-2xl lg:text-3xl font-extrabold text-gray-900">
                            Sign in as {selectedRole === 'jobseeker' ? 'Job Seeker' : 'Recruiter'}
                        </h2>
                        <p className='text-black text-base lg:text-[20px] text-center lg:text-left'>
                            Don't have an account? 
                            <span className='text-blue-600 hover:text-blue-500 cursor-pointer ml-2 hover:underline' onClick={() => window.location.href = '/register'}>
                                Join here
                            </span>
                        </p>
                        <form className="mt-6 lg:mt-8 space-y-4 lg:space-y-6" onSubmit={submit}>
                            <div className="rounded-md shadow-sm space-y-4">
                                <div>
                                    <label className='text-base lg:text-lg text-gray-900 font-medium'>Email</label>
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
                                    <label className='text-base lg:text-lg text-gray-900 font-medium'>Password</label>
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