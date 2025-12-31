import Layout from '../Components/Layout'
import SearchBar from '../Components/SearchBar'
import TrendUp from '../Components/TrendUp'
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
        </Layout>
    )
}
