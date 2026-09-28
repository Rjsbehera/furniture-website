import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200">
        <div className="space-y-6">
          <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            Admin Panel
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Welcome back.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Sign in to access your furniture dashboard, manage products, orders, and analytics from one place.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Quick access</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">Fast insights</p>
              <p className="mt-2 text-sm text-slate-600">Everything you need to run the store efficiently.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Inventory</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">Track stock</p>
              <p className="mt-2 text-sm text-slate-600">Monitor products, categories, and availability in real-time.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Login</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Sign in to your account</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Enter your email and password to continue.</p>
          </div>

          <form className="space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email address</span>
              <input
                type="email"
                placeholder="you@example.com" required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input
                type="password"
                placeholder="••••••••" required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </label>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-700 focus:ring-slate-400" required/>
                Remember me
              </label>
              <button type="button" className="font-semibold text-slate-900 hover:text-slate-700">
                Forgot password?
              </button>
            </div>

            <Link to={'/dashboard'}>
            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Sign in
            </button>
            </Link>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <p>
              New to the admin panel? <span className="font-semibold text-slate-900">Request access</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
