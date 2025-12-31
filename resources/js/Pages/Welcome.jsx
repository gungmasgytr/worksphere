import Layout from '../Components/Layout'
import SearchBar from '../Components/SearchBar'
import TrendUp from '../Components/TrendUp'
import JobCarousel from '../Components/JobCarousel'
import JobCard from '../Components/JobCard'
import CategoryGrid from '../Components/CategoryGird'
import { Link } from '@inertiajs/react'
export default function Welcome({ auth }) {
    return (
        <Layout user={auth.user}>
            <div className="min-h-screen flex flex-row items-center justify-center bg-[#2196F3] bg-[url('/assets/images/home/bg-image.png')] bg-no-repeat bg-cover px-16 py-8">
                <div className='flex flex-col'>
                    <h1 className='text-white text-7xl font-bold'>WorkSphere</h1>
                    <h2 className='text-white text-3xl text-nowrap mt-24'>Turn Your Skills Into Unlimited Opportunities</h2>
                    <p className='text-white text-xl mb-16'>Search, apply, and work on projects—all in one seamless platform.</p>
                    <SearchBar
                        placeholder="Search Here"
                        onSubmit={() => console.log('Searching...')}
                    />
                    <h2 className='text-white text-3xl text-bold my-8'>Trending Freelance Job</h2>
                    <div className='flex flex-row space-x-8 MY-8'>
                        <TrendUp label="DESIGNER" onClick={() => console.log('Designer clicked')} />
                        <TrendUp label="DEVELOPER" onClick={() => console.log('Developer clicked')} />
                        <TrendUp label="WORDPRESS" onClick={() => console.log('Wordpress clicked')} />
                    </div>
                </div>
                <img src="/assets/images/home/hero-image.png" alt="" />
            </div>
            <div className='bg-white p-16'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-4'>
                        <h1 className='text-black text-5xl font-bold'>
                            Most Popular Freelance Jobs
                        </h1>
                        <span>
                            <svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.5 2.5L27.5 22.5L17.5 12.5L2.5 27.5M47.5 2.5H32.5M47.5 2.5V17.5" stroke="#2E90EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex flex-row gap-3 items-center cursor-pointer'>
                        <p className='font-semibold text-[#2E90EB] text-lg justify-end items-end'>View All</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8L22 12L18 16" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12H22" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className='py-16'>
                    <JobCarousel />
                </div>
            </div>
            <div className='bg-white p-16'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-4'>
                        <h1 className='text-black text-5xl font-bold'>
                            Explore Freelance Jobs
                        </h1>
                    </div>
                    <div className='flex flex-row gap-3 items-center cursor-pointer'>
                        <p className='font-semibold text-[#2E90EB] text-lg justify-end items-end'>View All</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8L22 12L18 16" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12H22" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <JobCard key={i} />
                    ))}
                    </div>
                </section>
            </div>
            <div className='bg-white '>
                <CategoryGrid />
            </div>
            <div className='bg-white p-8'>
                <div className='flex flex-col items-center justify-center space-y-4 bg-[#1E87DB] rounded-2xl py-16'>
                    <h1 className='text-white text-4xl font-bold'>Ready to Join?</h1>
                    <p className='text-white font-normal text-xl'>Sign up now and discover a world of freelance opportunities</p>
                    <Link href="/register" className="border-2 border-white rounded-full px-8 py-3 font-bold text-white hover:bg-white hover:text-[#1E87DB]">Sign Up</Link>
                </div>  
            </div>
        </Layout>
    )
}
