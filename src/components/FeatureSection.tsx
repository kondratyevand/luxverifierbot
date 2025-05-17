import React from 'react'
import { Zap, Shield, Database, Eye, Smartphone, Lock } from 'lucide-react'

const features = [
  {
    name: 'Instant Analysis',
    description: 'Get verification results in seconds, not days',
    icon: Zap
  },
  {
    name: 'Multi-Brand Support',
    description: 'Verify items from Prada, Hermès, Louis Vuitton, and more',
    icon: Shield
  },
  {
    name: 'Comprehensive Database',
    description: 'Trained on thousands of authentic luxury items',
    icon: Database
  },
  {
    name: 'Detail Recognition',
    description: 'Identifies stitching, logos, materials, and hardware',
    icon: Eye
  },
  {
    name: 'Mobile Friendly',
    description: 'Use directly from your smartphone via Telegram',
    icon: Smartphone
  },
  {
    name: 'Private & Secure',
    description: 'Your images are analyzed and then deleted',
    icon: Lock
  }
]

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Luxury Authentication
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered system analyzes multiple aspects of luxury items to determine authenticity.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
