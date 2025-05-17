import React from 'react'
import { MessageSquare, Image, Search, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    name: 'Start the Bot',
    description: 'Open Telegram and search for @LuxVerify_Bot to start a conversation.',
    icon: MessageSquare,
  },
  {
    id: 2,
    name: 'Upload Image',
    description: 'Take a clear photo of your luxury item and send it to the bot.',
    icon: Image,
  },
  {
    id: 3,
    name: 'AI Analysis',
    description: 'Our advanced AI model analyzes the image for authenticity markers.',
    icon: Search,
  },
  {
    id: 4,
    name: 'Get Results',
    description: 'Receive a detailed report on the authenticity of your item within seconds.',
    icon: CheckCircle,
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 bg-white rounded-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple Authentication Process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Verify your luxury items in just a few simple steps through our Telegram bot.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 max-w-xs">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden shadow">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Sample Telegram Interaction</h4>
                <p className="text-sm text-gray-500">Here's what the verification process looks like in Telegram</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-md p-4 border border-gray-200">
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 bg-gray-100 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-500">Bot</span>
                  </div>
                  <div className="ml-3 bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm text-gray-700">Welcome to LuxVerify! Please send a clear photo of your luxury item for authentication.</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="mr-3 bg-indigo-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm text-gray-700">*User sends image of a Prada bag*</p>
                  </div>
                  <div className="flex-shrink-0 bg-indigo-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">You</span>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 bg-gray-100 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-500">Bot</span>
                  </div>
                  <div className="ml-3 bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm text-gray-700">
                      ✅ <strong>Authentic Prada Item</strong><br />
                      Confidence: 92%<br />
                      Matches: Logo accuracy, stitching pattern consistency, hardware match.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
