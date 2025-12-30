import Layout from '../Components/Layout'

export default function Welcome({ auth }) {
    return (
        <Layout user={auth.user}>
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-blue-600">
                    Welcome React + Inertia + Tailwind
                </h1>
            </div>
        </Layout>
    )
}
