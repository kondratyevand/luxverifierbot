import React from 'react'
import { ShieldCheck, Instagram, Twitter, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-indigo-400" />
              <h2 className="ml-2 text-xl font-bold">LuxVerify</h2>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              AI-powered luxury authentication via Telegram. Verify your high-end items instantly.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Supported Brands</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Prada</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hermès</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Louis Vuitton</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Gucci</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Chanel</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Authentication Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} LuxVerify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
