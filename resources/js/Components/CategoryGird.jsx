import CategoryCard from '@/components/CategoryCard'

const categories = [
    { title: 'Graphic Design', image: '/assets/images/categories/graphic.png' },
    { title: 'Cartoon Animation', image: '/assets/images/categories/cartoon.png' },
    { title: 'Illustration', image: '/assets/images/categories/illustration.png' },
    { title: 'Flyers & Vouchers', image: '/assets/images/categories/flyer.png' },
    { title: 'Logo Design', image: '/assets/images/categories/logo.png' },
    { title: 'Social graphics', image: '/assets/images/categories/social.png' },
    { title: 'Article writing', image: '/assets/images/categories/article.png' },
    { title: 'Video Editing', image: '/assets/images/categories/video.png' },
]

export default function CategoryGrid() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                <CategoryCard
                    key={i}
                    title={cat.title}
                    image={cat.image}
                />
                ))}
            </div>

            {/* More Categories */}
            <div className="mt-10 flex justify-center">
                <button className="flex items-center gap-2 text-blue-500 font-bold hover:underline text-lg">
                More Categories
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                </button>
            </div>
        </section>
    )
}
