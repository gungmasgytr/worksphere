import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import { usePage } from '@inertiajs/react'
import { showAlert } from '../Utils/alert'

export default function Layout({ children, user }) {
    const { flash } = usePage().props

    useEffect(() => {
        if (flash?.success) {
            showAlert.success(flash.success)
        }
        if (flash?.error) {
            showAlert.error(flash.error)
        }
        if (flash?.warning) {
            showAlert.warning(flash.warning)
        }
        if (flash?.info) {
            showAlert.info(flash.info)
        }
    }, [flash])

    return (
        <div className="min-h-screen flex flex-col">
            <Header user={user} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}