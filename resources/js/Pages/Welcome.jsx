import Layout from '../Components/Layout'

export default function Welcome({ auth }) {
    return (
        <Layout user={auth.user}>
            <div className="min-h-screen flex flex-row items-center justify-center bg-[#2196F3] bg-[url('/assets/images/home/bg-image.png')] bg-no-repeat bg-cover">
                
            </div>
        </Layout>
    )
}
