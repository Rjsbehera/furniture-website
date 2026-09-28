import React from 'react'

export default function Loading() {
  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-6xl p-6">
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-1/3 dark:bg-gray-700 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3/4 dark:bg-gray-700 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/2 dark:bg-gray-700 animate-pulse" />
            </div>
          ))}
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
   </>
  )
}
