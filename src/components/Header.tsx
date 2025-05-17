import React from 'react'
import { ShieldCheck } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">LuxVerify</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#brands" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Supported Brands
            </a>
          </nav>
          
          <div>
            <a
              href="https://t.me/luxverify_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Open in Telegram
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-700">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-sm font-medium text-white">
            Verify luxury items instantly with our AI-powered Telegram bot
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
