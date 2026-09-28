import React, { useState } from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

import { SketchPicker } from 'react-color';



export default function AddColor() {
  const [color, setColor] = useState('#000000')

  return (
    <>
      <BreadCrumbs title={'/color'} title1={'/add color'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-800">Add New Color</h2>
            <p className="mt-1 text-sm text-slate-500">Create a new color option for your furniture catalog.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Color Name</label>
                <input
                  type="text"
                  placeholder="Enter color name"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Color Code</label>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
                  Save Color
                </button>
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Cancel
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 mb-10">
              <h3 className="text-sm font-semibold text-slate-700">Color Preview</h3>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full border border-slate-300" style={{ backgroundColor: color }} />
                <div>
                  <p className="text-sm font-medium text-slate-800">Selected Color</p>
                  <p className="text-sm text-slate-500">{color}</p>
                </div>
              </div>
              <div className="mt-6">
                <SketchPicker color={color} onChange={(e) => setColor(e.hex)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
