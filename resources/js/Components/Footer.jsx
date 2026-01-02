export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                
                <div>
                    <h3 className="text-gray-900 font-semibold mb-4 text-sm lg:text-base">Info</h3>
                    <ul className="space-y-2 text-gray-500 text-sm lg:text-base">
                    <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-900">Support</a></li>
                    <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-900">Download Apps</a></li>
                    <li><a href="#" className="hover:text-gray-900">The Slack App</a></li>
                    <li><a href="#" className="hover:text-gray-900">Partnerships</a></li>
                    <li><a href="#" className="hover:text-gray-900">Affiliate Program</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-gray-900 font-semibold mb-4 text-sm lg:text-base">Features</h3>
                    <ul className="space-y-2 text-gray-500 text-sm lg:text-base">
                    <li><a href="#" className="hover:text-gray-900">Invoicing</a></li>
                    <li><a href="#" className="hover:text-gray-900">Task Management</a></li>
                    <li><a href="#" className="hover:text-gray-900">Contracts</a></li>
                    <li><a href="#" className="hover:text-gray-900">Payments</a></li>
                    <li><a href="#" className="hover:text-gray-900">Recurring payments</a></li>
                    <li><a href="#" className="hover:text-gray-900">Expense Tracking</a></li>
                    <li><a href="#" className="hover:text-gray-900">Reports</a></li>
                    <li><a href="#" className="hover:text-gray-900">Proposals</a></li>
                    <li><a href="#" className="hover:text-gray-900">Time Tracking</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-gray-900 font-semibold mb-4 text-sm lg:text-base">Tools</h3>
                    <ul className="space-y-2 text-gray-500 text-sm lg:text-base">
                    <li><a href="#" className="hover:text-gray-900">Free Invoice Templates</a></li>
                    <li><a href="#" className="hover:text-gray-900">Free Invoice Generator</a></li>
                    <li><a href="#" className="hover:text-gray-900">Free Invoicing Guide</a></li>
                    <li><a href="#" className="hover:text-gray-900">Self Employment Tax Calculator</a></li>
                    <li><a href="#" className="hover:text-gray-900">Quarterly Tax Calculator</a></li>
                    <li><a href="#" className="hover:text-gray-900">Business Name Generator</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-gray-900 font-semibold mb-4 text-sm lg:text-base">Policies</h3>
                    <ul className="space-y-2 text-gray-500 text-sm lg:text-base">
                    <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                    </ul>
                </div>
                </div>

                <div className="mt-8 lg:mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
                    <span className="font-bold text-lg lg:text-[20px] text-gray-500">WorkSphere.</span> © WorkSphere International Ltd. 2023
                </p>

                <div className="flex items-center space-x-4 text-gray-400">
                    <a href="#" className="hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.82 1.08A4.5 4.5 0 0 0 12 4.5v1A10.66 10.66 0 0 1 3 1s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                    </a>
                    <a href="#" className="hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.49v-9.29H9.69V11.09h3.12V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.91c-1.5 0-1.79.72-1.79 1.77v2.32h3.58l-.47 3.62h-3.11V24h6.1c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z"/>
                    </svg>
                    </a>
                    <a href="#" className="hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.763 1.75-1.763s1.75.79 1.75 1.763c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.865 0-2.151 1.454-2.151 2.959v5.704h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.605v5.591z"/>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </footer>

    )
}