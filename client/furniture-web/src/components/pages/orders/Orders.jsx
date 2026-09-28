import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

const orders = [
  { id: '#1024', customer: 'Ava Smith', total: '$1,240', status: 'Delivered' },
  { id: '#1025', customer: 'Noah Patel', total: '$860', status: 'Processing' },
  { id: '#1026', customer: 'Mia Johnson', total: '$2,100', status: 'Pending' },
  { id: '#1027', customer: 'Liam Brown', total: '$540', status: 'Cancelled' }
]

export default function Orders() {
  return (
    <>
      <BreadCrumbs title={'/orders'} title1={''} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Order Management</h2>
              <p className="mt-1 text-sm text-slate-500">Monitor and manage recent customer orders.</p>
            </div>

            <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
              Export Orders
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Total Orders</p>
              <p className="mt-2 text-2xl font-semibold text-slate-800">248</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Revenue</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-600">$18,420</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Pending</p>
              <p className="mt-2 text-2xl font-semibold text-amber-600">32</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-medium">Order ID</th>
                    <th className="px-4 py-3 font-medium">Customer</th>
                    <th className="px-4 py-3 font-medium">Total</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-800">{order.id}</td>
                      <td className="px-4 py-3 text-slate-600">{order.customer}</td>
                      <td className="px-4 py-3 text-slate-600">{order.total}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : order.status === 'Processing' ? 'bg-blue-100 text-blue-700' : order.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
