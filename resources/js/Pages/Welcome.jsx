import Layout from '../Components/Layout'
import SearchBar from '../Components/SearchBar'
import TrendUp from '../Components/TrendUp'
import JobCarousel from '../Components/JobCarousel'
import JobCard from '../Components/JobCard'
import CategoryGrid from '../Components/CategoryGird'
import { Link, router } from '@inertiajs/react'
export default function Welcome({ auth }) {
    return (
        <Layout user={auth.user}>
            <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#2196F3] bg-[url('/assets/images/home/bg-image.png')] bg-no-repeat bg-cover px-4 lg:px-16 py-12">
                <div className='flex flex-col w-full lg:w-auto'>
                    <h1 className='text-white text-4xl lg:text-7xl font-bold text-center lg:text-left lg:mt-16'>WorkSphere</h1>
                    <h2 className='text-white text-xl lg:text-3xl text-center lg:text-left mt-4 lg:mt-8'>Turn Your Skills Into Unlimited Opportunities</h2>
                    <p className='text-white text-base lg:text-xl mb-8 lg:mb-16 text-center lg:text-left'>Search, apply, and work on projects—all in one seamless platform.</p>
                    <div className="flex justify-center lg:justify-start">
                        <SearchBar
                            placeholder="Search Here"
                            onSubmit={(query) => {
                                if (query.trim()) {
                                    router.visit('/jobs', {
                                        data: { search: query.trim() }
                                    })
                                }
                            }}
                        />
                    </div>
                    <h2 className='text-white text-xl lg:text-3xl font-bold my-6 lg:my-8 text-center lg:text-left'>Trending Freelance Job</h2>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8 lg:space-x-8 lg:flex-nowrap'>
                        <TrendUp label="DESIGNER" onClick={() => console.log('Designer clicked')} />
                        <TrendUp label="DEVELOPER" onClick={() => console.log('Developer clicked')} />
                        <TrendUp label="WORDPRESS" onClick={() => console.log('Wordpress clicked')} />
                    </div>
                </div>
                <div className="w-full lg:w-auto mt-8 lg:mt-0">
                    <img src="/assets/images/home/hero-image.png" alt="" className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0" />
                </div>
            </div>
            <div className='bg-white p-4 lg:p-16'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div className='flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start'>
                        <h1 className='text-black text-3xl lg:text-5xl font-bold text-center lg:text-left'>
                            Most Popular Freelance Jobs
                        </h1>
                        <span className="mt-2 lg:mt-0">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[70px] lg:h-[70px]">
                                <path d="M47.5 2.5L27.5 22.5L17.5 12.5L2.5 27.5M47.5 2.5H32.5M47.5 2.5V17.5" stroke="#2E90EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex flex-row gap-3 items-center cursor-pointer mt-4 lg:mt-0'>
                        <p className='font-semibold text-[#2E90EB] text-base lg:text-lg'>View All</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8L22 12L18 16" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12H22" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className='py-8 lg:py-16'>
                    <JobCarousel />
                </div>
            </div>
            <div className='bg-white p-4 lg:p-16'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div className='flex flex-row gap-4 items-center'>
                        <h1 className='text-black text-3xl lg:text-5xl font-bold text-center lg:text-left'>
                            Explore Freelance Jobs
                        </h1>
                    </div>
                    <div className='flex flex-row gap-3 items-center cursor-pointer mt-4 lg:mt-0'>
                        <p className='font-semibold text-[#2E90EB] text-base lg:text-lg'>View All</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8L22 12L18 16" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12H22" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <section className="max-w-7xl mx-auto px-0 lg:px-6 py-8 lg:py-16">
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
            <div className='bg-white p-4 lg:p-8'>
                <div className='flex flex-col items-center justify-center space-y-4 bg-[#1E87DB] rounded-2xl py-8 lg:py-16 px-4 lg:px-8'>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold text-center'>Ready to Join?</h1>
                    <p className='text-white font-normal text-base lg:text-xl text-center'>Sign up now and discover a world of freelance opportunities</p>
                    <Link href="/register" className="border-2 border-white rounded-full px-6 lg:px-8 py-2 lg:py-3 font-bold text-white hover:bg-white hover:text-[#1E87DB] text-sm lg:text-base">Sign Up</Link>
                </div>  
            </div>
        </Layout>
    )
}
