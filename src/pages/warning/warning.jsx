import React from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Warning() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-yellow-400 text-yellow-900 shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm font-medium text-center">
              This is a demo app. Do not enter your real credentials.
            </p>
          </div>
        </div>
      </header>

    </>
  )
}