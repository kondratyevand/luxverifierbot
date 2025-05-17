import React, { useState } from 'react'
import { Upload, Camera, CheckCircle, XCircle, AlertCircle, Info, Loader2 } from 'lucide-react'
import Header from './components/Header'
import VerificationResult from './components/VerificationResult'
import FeatureSection from './components/FeatureSection'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<null | {
    authentic: boolean
    confidence: number
    reasons: string[]
  }>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    if (!image) return
    
    setIsAnalyzing(true)
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock result - in a real app, this would come from the AI model
      const mockResults = [
        {
          authentic: true,
          confidence: 92,
          reasons: [
            "Logo accuracy matches authentic patterns",
            "Stitching pattern consistency confirmed",
            "Hardware details match authentic reference",
            "Serial number format is valid"
          ]
        },
        {
          authentic: false,
          confidence: 88,
          reasons: [
            "Logo inconsistency detected in embossing depth",
            "Stitching pattern irregularities found",
            "Hardware finish doesn't match authentic reference",
            "Serial number format is suspicious"
          ]
        }
      ]
      
      // Randomly select one of the mock results
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)]
      
      setResult(randomResult)
      setIsAnalyzing(false)
    }, 3000)
  }

  const resetAnalysis = () => {
    setImage(null)
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Verify Your Luxury Item</h2>
              <p className="text-gray-600 mb-6">
                Upload a clear image of your luxury item and our AI will analyze it for authenticity.
              </p>
              
              {!image ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Upload a clear image of your item</p>
                  <label className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                    <input
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    Select Image
                  </label>
                  <p className="mt-2 text-xs text-gray-500">or drag and drop</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden h-64 bg-gray-100">
                    <img 
                      src={image} 
                      alt="Uploaded luxury item" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={resetAnalysis}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Change Image
                    </button>
                    
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isAnalyzing ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                          Analyzing...
                        </>
                      ) : (
                        'Verify Authenticity'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-8">
              {result ? (
                <VerificationResult result={result} />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Camera className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">Ready to Verify</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload an image and click "Verify Authenticity" to get started.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <FeatureSection />
        <HowItWorks />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
