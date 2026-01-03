import CategoryCard from '@/components/CategoryCard'
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function CategoryGrid({ categories = [] }) {
    const [showAll, setShowAll] = useState(false)
    const displayedCategories = showAll ? categories : categories.slice(0, 8)

    const getCategoryImage = (categoryName, index) => {
        const images = [
            '/assets/images/categories/graphic.png',
            '/assets/images/categories/cartoon.png',
            '/assets/images/categories/illustration.png',
            '/assets/images/categories/flyer.png',
            '/assets/images/categories/logo.png',
            '/assets/images/categories/social.png',
            '/assets/images/categories/article.png',
            '/assets/images/categories/video.png'
        ]
        return images[index % images.length]
    }

    const handleCategoryClick = (categoryName) => {
        router.visit('/jobs', {
            data: { category: categoryName }
        })
    }
    return (
        <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedCategories.map((category, index) => (
                <CategoryCard
                    key={category.id}
                    title={category.name}
                    image={getCategoryImage(category.name, index)}
                    onClick={() => handleCategoryClick(category.name)}
                />
                ))}
            </div>

            {/* More Categories */}
            {categories.length > 8 && (
                <div className="mt-10 flex justify-center">
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 text-blue-500 font-bold hover:underline text-lg"
                    >
                    {showAll ? 'Show Less' : 'More Categories'}
                    <svg
                        className={`w-7 h-7 transition-transform ${showAll ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>
                </div>
            )}
        </section>
    )
}
