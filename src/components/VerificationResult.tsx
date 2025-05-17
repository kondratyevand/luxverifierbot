import React from 'react'
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

interface VerificationResultProps {
  result: {
    authentic: boolean
    confidence: number
    reasons: string[]
  }
}

const VerificationResult: React.FC<VerificationResultProps> = ({ result }) => {
  return (
    <div className="h-full flex flex-col">
      <div className={`rounded-lg p-6 mb-4 ${result.authentic ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex items-center">
          {result.authentic ? (
            <CheckCircle className="h-8 w-8 text-green-500" />
          ) : (
            <XCircle className="h-8 w-8 text-red-500" />
          )}
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">
              {result.authentic ? 'Authentic Item' : 'Item Likely Not Genuine'}
            </h3>
            <div className="mt-2 flex items-center">
              <div className="text-sm font-medium text-gray-500">
                Confidence: {result.confidence}%
              </div>
              <div className="ml-4 w-24 bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${result.authentic ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow">
        <h4 className="font-medium text-gray-900 mb-3">Analysis Details:</h4>
        <ul className="space-y-2">
          {result.reasons.map((reason, index) => (
            <li key={index} className="flex items-start">
              <span className={`flex-shrink-0 h-5 w-5 ${result.authentic ? 'text-green-500' : 'text-red-500'}`}>
                {result.authentic ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <AlertTriangle className="h-5 w-5" />
                )}
              </span>
              <span className="ml-2 text-sm text-gray-600">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          This analysis is based on visual indicators only. For a comprehensive authentication, 
          consider consulting with a professional authenticator.
        </p>
      </div>
    </div>
  )
}

export default VerificationResult
