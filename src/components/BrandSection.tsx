import React from 'react'

const brands = [
  { name: 'Prada', logo: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80' },
  { name: 'Hermès', logo: 'https://images.unsplash.com/photo-1599593752325-ffa41031056e?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80' },
  { name: 'Louis Vuitton', logo: 'https://images.unsplash.com/photo-1599593752325-ffa41031056e?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80' },
  { name: 'Gucci', logo: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80' },
  { name: 'Chanel', logo: 'https://images.unsplash.com/photo-1599593752325-ffa41031056e?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80' },
  { name: 'Dior', logo: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80' },
]

const BrandSection: React.FC = () => {
  return (
    <section id="brands" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Supported Brands</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Verify Top Luxury Brands
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI model is trained to recognize authenticity markers from these premium brands.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand.name} className="col-span-1 flex justify-center py-8 px-8 bg-white rounded-lg shadow">
              <span className="text-lg font-medium text-gray-900">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandSection
