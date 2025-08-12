import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - 404',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-700 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Back Home
          </Link>
          
          <div className="text-gray-500">
            <p>Or try one of these pages:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link 
                href="/projects" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link 
                href="/#about" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/#contact" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 