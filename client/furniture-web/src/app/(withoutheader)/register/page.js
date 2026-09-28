import React from 'react'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">Start your journey with us — simple, secure registration.</p>
        </div>

        <form action="/api/auth/register" method="post" className="mt-8 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full name</label>
              <input id="name" name="name" type="text" required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Jane Doe" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a password" />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Confirm password</label>
              <input id="confirm-password" name="confirmPassword" type="password" required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Confirm your password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create account
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account? <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
