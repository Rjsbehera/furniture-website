import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'
import { IoIosFunnel } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios'
import izitoast from 'izitoast';
import {Link} from "react-router"


const countries = [
  { id: 1, name: 'India', code: 'IN', status: 'Active' },
  { id: 2, name: 'United States', code: 'US', status: 'Active' },

]

export default function ViewCountry() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH
  let [funnel, setFunnel] = useState(false)
  let [data, setData] = useState([])
  let [ids, setIds] = useState([])
  let getData = () => {
    axios.get(`${apiBaseUrl}country/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes.viewRes)
        setData(finalRes.viewRes)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  // console.log(data)

  let getCheckValue = (e) => {
    let checkValue = e.target.value
    if (e.target.checked) {
      setIds([...ids, checkValue])
    }
    else {
      setIds(ids.filter((v) => v != checkValue))
    }
  }

  let allCheck = (e) => {
    if (e.target.checked) {
      let allDataIds = data.map((obj) => obj._id)
      setIds(allDataIds)
    }
    else {
      setIds([])
    }
  }

  let deleteCountries = () => {
    if (ids.length >= 1) {
      axios.post(`${apiBaseUrl}country/delete`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: "Success",
              message: finalRes.msg,
              position: "topRight",
              color: "green"
            })
            getData()
            setIds([])
          }
        })
    }
    else {
      izitoast.error({
        title: "Error",
        message: "Please Select One Checkbox For Delete",
        position: 'topRight',
        color: "red"
      })
    }
  }

  let updateStatus = () => {
    if (ids.length >= 1) {
      axios.post(`${apiBaseUrl}country/change-status`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: "Success",
              message: finalRes.msg,
              position: "topRight",
              color: "green"
            })
            getData()
            setIds([])
          }
        })
    }
    else {
      izitoast.error({
        title: "Error",
        message: "Please Select One Checkbox For Delete",
        position: 'topRight',
        color: "red"
      })
    }
  }


  return (
    <>
      <BreadCrumbs title={'/country'} title1={'/view country'} />

      {
        funnel &&
        <form className='max-w-full mx-auto border-2 border-slate-100 mt-5 p-5 rounded-lg'>
          <input type="text" placeholder='search name...' className='w-70 outline-none border border-slate-200 px-2 py-1.5 rounded-lg' />
          <button tupe='submit' className='bg-blue-700 text-white outline-none border border-slate-200 p-2.5 ml-2 cursor-pointer rounded-lg'><IoIosSearch /></button>
        </form>
      }

      <div className='max-w-full mx-auto border-2 border-slate-100 mt-5 py5'>
        <div className='bg-slate-100 flex justify-between items-center border-b-1 border-slate-100 px-5'>
          <div>
            <h1 className='text-2xl font-bold'>View Counteries</h1>
          </div>

          <div className=' flex gap-5 p-5 '>
            <button className='bg-blue-700 text-white p-2 rounded text-2xl' onClick={() => setFunnel(!funnel)}><IoIosFunnel /></button>
            <button className='px-3 py-2 text-white font-fold bg-[#15803D] rounded-[4px]' onClick={updateStatus}>Change Status</button>
            <button className='px-3 py-2 text-white font-fold bg-[#B91C1C] rounded-[4px]' onClick={deleteCountries}>Delete</button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='text-gray-600 text-sm'>
                <th className='py-3'>
                  <input type="checkbox" onChange={allCheck} checked={ids.length == data.length} />
                </th>
                <th className='text-left py-3'>Country Name</th>
                <th className='text-left py-3'>Order</th>
                <th className='text-left py-3'>Status</th>
                <th className='text-left py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((countrie, index) => (
                  <tr key={countrie._id} className='hover:bg-gray-50'>
                    <td className='py-4 text-center'>
                      <input onChange={getCheckValue} type="checkbox" value={countrie._id} checked={ids.includes(countrie._id)} />
                    </td>
                    <td>{countrie.name}</td>
                    <td>{countrie.order}</td>
                    <td><span className={`px-3 py-1 rounded-full text-sm text-white ${countrie.status === "Active" ? "bg-red-500" : "bg-green-500"}`}>{countrie.status ? "Active" : "Deactive"}</span></td>
                    <td className='text-center'>
                      <Link to={`/country/edit/${countrie._id}`} >
                      <button className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600'><BiPencil /></button>
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
