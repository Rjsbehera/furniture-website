import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center px-6">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 dark:text-white">404</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Page not found</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.</p>

        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Home</Link>
          <Link href="/contact-us" className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">Contact</Link>
        </div>
      </div>
    </div>
  )
}
