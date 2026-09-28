import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import BreadCrumbs from '../common/BreadCrumbs'

export default function DashBoard() {
  return (
    <>
    <BreadCrumbs title={"/dashboard"} title1="" />
    <main className="p-6">
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-48 rounded-[8px] bg-blue-800 p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl text-white">$6K(-12.4% ↓)</p>
              <p className="mt-2 text-2xl font-semibold text-white">Users</p>
            </div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg  text-white">
              <BsThreeDotsVertical className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="h-48 rounded-2xl bg-[#2998FE] p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl text-white">$6,200 (40.9% ↑)</p>
              <p className="mt-2 text-2xl font-semibold text-white">Product</p>
            </div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white">
              <BsThreeDotsVertical className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="h-48 rounded-2xl bg-[#FCB01E] p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl text-white">2.49% (84.7% ↑)</p>
              <p className="mt-2 text-2xl font-semibold text-white">Category</p>
            </div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white">
              <BsThreeDotsVertical className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="h-48 rounded-2xl bg-[#E95353] p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl text-white">$4K (-23.6% ↓)</p>
              <p className="mt-2 text-2xl font-semibold text-white">Orders</p>
            </div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg  text-white">
              <BsThreeDotsVertical className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-base font-semibold text-slate-900">Sales Overview</h2>
          <p className="mt-2 text-sm text-slate-600">Monthly sales and trends (static placeholder)</p>
          <div className="mt-6 h-48 rounded-lg bg-slate-50" />
        </div>

        <aside className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">Activity</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-600">
            <li className="flex items-start justify-between">
              <div>
                <p className="text-slate-800">Order #5482</p>
                <p className="text-xs">Placed 2 hours ago</p>
              </div>
              <p className="text-sm text-slate-600">$129</p>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <p className="text-slate-800">New user signup</p>
                <p className="text-xs">3 hours ago</p>
              </div>
              <p className="text-sm text-slate-600">1</p>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <p className="text-slate-800">Inventory low</p>
                <p className="text-xs">5 hours ago</p>
              </div>
              <p className="text-sm text-rose-600">Action</p>
            </li>
          </ul>
        </aside>
      </section>

      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h3 className="text-base font-semibold text-slate-900">Recent Orders</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="py-3 pr-6">Order</th>
                <th className="py-3 pr-6">Customer</th>
                <th className="py-3 pr-6">Date</th>
                <th className="py-3 pr-6">Amount</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-4 pr-6">#5482</td>
                <td className="py-4 pr-6">John Doe</td>
                <td className="py-4 pr-6">Jul 14, 2026</td>
                <td className="py-4 pr-6">$129</td>
                <td className="py-4">Completed</td>
              </tr>
              <tr>
                <td className="py-4 pr-6">#5481</td>
                <td className="py-4 pr-6">Anna Smith</td>
                <td className="py-4 pr-6">Jul 13, 2026</td>
                <td className="py-4 pr-6">$89</td>
                <td className="py-4">Pending</td>
              </tr>
              <tr>
                <td className="py-4 pr-6">#5479</td>
                <td className="py-4 pr-6">Mark Lee</td>
                <td className="py-4 pr-6">Jul 12, 2026</td>
                <td className="py-4 pr-6">$249</td>
                <td className="py-4">Shipped</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
    </>
  )
}
