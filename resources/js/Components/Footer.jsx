export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">WorkSphere</h3>
                        <p className="text-gray-300">Platform terbaik untuk mencari kerja dan merekrut talent terbaik.</p>
                    </div>
                    
                    <div>
                        <h4 className="text-md font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/jobs" className="hover:text-white">Browse Jobs</a></li>
                            <li><a href="/companies" className="hover:text-white">Companies</a></li>
                            <li><a href="/about" className="hover:text-white">About Us</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-md font-semibold mb-4">Contact</h4>
                        <p className="text-gray-300">Email: info@worksphere.com</p>
                        <p className="text-gray-300">Phone: +62 123 456 789</p>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2024 WorkSphere. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}