import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Admin Login</h2>
        <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300">Sign in to manage the site</p>

        <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input name="email" type="email" required className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
            <input name="password" type="password" required className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">Sign in</button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="text-indigo-600 hover:underline">Return to site</Link>
        </div>
      </div>
    </div>
   </>
  )
}
