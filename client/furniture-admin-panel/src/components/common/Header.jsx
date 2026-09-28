import React from 'react'
import { FiBell, FiSearch, FiUser, FiLogOut } from 'react-icons/fi'
import { VscThreeBars } from "react-icons/vsc";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiProfileFill } from "react-icons/ri";
import { Link } from 'react-router';

export default function Header() {
  return (
    // <header className="bg-slate-50 p-6 pb-4 rounded-b-3xl shadow-sm border-b border-slate-200">
    //   <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    //     <div>
    //       <p className="text-sm text-slate-500">Dashboard</p>
    //       <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome back, Admin</h1>
    //       <p className="mt-2 text-sm text-slate-600 max-w-2xl">
    //         Here’s a quick overview of the latest activity, sales, and user engagement.
    //       </p>
    //     </div>

    //     <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    //       <label className="relative block text-slate-500">
    //         <span className="sr-only">Search</span>
    //         <FiSearch className="pointer-events-none absolute inset-y-0 left-3 my-auto h-5 w-5" />
    //         <input
    //           type="search"
    //           placeholder="Search reports"
    //           className="w-full min-w-[220px] rounded-3xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
    //         />
    //       </label>

    //       <button
    //         type="button"
    //         className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100"
    //         aria-label="Notifications"
    //       >
    //         <FiBell className="h-5 w-5" />
    //       </button>

    //       <button
    //         type="button"
    //         className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
    //       >
    //         <FiUser className="h-5 w-5" />
    //         Account
    //       </button>
    //     </div>
    //   </div>

    //   <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    //     <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
    //       <p className="text-sm text-slate-500">Total Sales</p>
    //       <p className="mt-3 text-2xl font-semibold text-slate-900">$42,780</p>
    //       <p className="mt-2 text-sm text-emerald-600">+12.4% vs last week</p>
    //     </div>

    //     <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
    //       <p className="text-sm text-slate-500">New Users</p>
    //       <p className="mt-3 text-2xl font-semibold text-slate-900">1,285</p>
    //       <p className="mt-2 text-sm text-slate-600">68 new signups today</p>
    //     </div>

    //     <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
    //       <p className="text-sm text-slate-500">Orders</p>
    //       <p className="mt-3 text-2xl font-semibold text-slate-900">386</p>
    //       <p className="mt-2 text-sm text-slate-600">Most recent order 2h ago</p>
    //     </div>

    //     <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
    //       <p className="text-sm text-slate-500">Revenue</p>
    //       <p className="mt-3 text-2xl font-semibold text-slate-900">$8,940</p>
    //       <p className="mt-2 text-sm text-slate-600">Up 7.1% from yesterday</p>
    //     </div>
    //   </div>
    // </header>
    <>
    <header className="w-full sticky top-0 bg-white border-b p-3 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <VscThreeBars className="text-xl" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <label className="relative hidden sm:block">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search reports"
              className="pl-10 pr-3 py-2 rounded-2xl border border-gray-200 bg-white text-sm w-56 focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
          </label>

          <button className="p-2 rounded-lg hover:bg-gray-100">
            <FiBell className="text-lg text-gray-600" />
          </button>

          <div className="relative group">
            <button className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-100">
              <img className="w-10 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile" />
              <span className="hidden md:inline-block text-sm font-medium text-gray-700">Admin</span>
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-1 transition-all duration-150">
              {/* <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold text-gray-800">Admin Name</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div> */}
              <Link to={'/profile/profile'}  className="border-b-1 flex items-center gap-2 border-b-gray-300 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><BiSolidUserCircle />Profile</Link>
              <Link to={'/companyprofile/companyprofile'}  className="border-b-1 flex items-center gap-2 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><RiProfileFill />Company Profile</Link>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2">
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
