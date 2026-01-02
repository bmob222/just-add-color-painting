'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'interior', name: 'Interior' },
  { id: 'exterior', name: 'Exterior' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'cabinets', name: 'Cabinets' },
]

// Gallery items with real stock images
const galleryItems = [
  { id: 1, category: 'interior', title: 'Modern Living Room', description: 'Complete interior repaint with accent wall', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80' },
  { id: 2, category: 'exterior', title: 'Victorian Home', description: 'Full exterior restoration and painting', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80' },
  { id: 3, category: 'cabinets', title: 'Kitchen Transformation', description: 'Oak cabinets refinished in modern white', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { id: 4, category: 'commercial', title: 'Office Complex', description: 'Multi-floor commercial painting project', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { id: 5, category: 'interior', title: 'Master Bedroom Suite', description: 'Calming palette with textured accent wall', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80' },
  { id: 6, category: 'exterior', title: 'Craftsman Bungalow', description: 'Period-appropriate color restoration', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
  { id: 7, category: 'interior', title: 'Open Concept Living', description: 'Cohesive color flow throughout main floor', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80' },
  { id: 8, category: 'cabinets', title: 'Bathroom Vanity', description: 'Custom color match with lacquer finish', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' },
  { id: 9, category: 'commercial', title: 'Restaurant Rebrand', description: 'Complete interior transformation', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { id: 10, category: 'exterior', title: 'Beach House', description: 'Weather-resistant coastal colors', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80' },
  { id: 11, category: 'interior', title: 'Home Office', description: 'Productive color scheme for focus', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { id: 12, category: 'commercial', title: 'Retail Boutique', description: 'Brand-aligned interior design', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Gallery
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            See the transformations we've created for homes and businesses. Every project tells a story of color and craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Real image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const item = galleryItems.find(i => i.id === selectedImage)
              if (!item) return null
              return (
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mt-2">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Before/After Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Before & After</h2>
            <p className="mt-4 section-subheading mx-auto">
              See the dramatic transformations our team creates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&q=80"
                    alt="Before renovation"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</div>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
                    alt="After renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">After</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900">Living Room Transformation</h3>
                <p className="text-sm text-gray-600 mt-1">Complete repaint with modern neutral tones and accent wall.</p>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80"
                    alt="Before kitchen"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</div>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                    alt="After kitchen"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">After</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900">Kitchen Cabinet Refinishing</h3>
                <p className="text-sm text-gray-600 mt-1">Dark oak cabinets transformed to bright, modern white.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready for Your Own Transformation?
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Let's discuss your project and create something beautiful together.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
