import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'
import { IoIosFunnel } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import axios from 'axios';
import izitoast from 'izitoast';
import { Link } from 'react-router';

const objs = [
  { id: 1, name: 'Living Room', image: 'https://packshifts.in/images/iso.png', order: 1, status: 'Active' },
  { id: 2, name: 'Bedroom', image: 'https://packshifts.in/images/iso.png', order: 1, status: 'Active' },

]

export default function ViewCatagory() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH
  let [data, setData] = useState([])
  let [path, setPath] = useState('')
  let [ids, setIds] = useState([])

  let getCategoryData = () => {
    axios.get(`${apiBaseUrl}category/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data)
        setPath(finalRes.path)
      })
  }
  // console.log(data)

  useEffect(() => {
    getCategoryData()
  }, [])

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

  let deleteCategory = () => {
    if (ids.length >= 1) {
      axios.post(`${apiBaseUrl}category/delete`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: "Success",
              message: finalRes.msg,
              position: "topRight",
              color: "green"
            })
            getCategoryData()
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
      axios.post(`${apiBaseUrl}category/change-status`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: "Success",
              message: finalRes.msg,
              position: "topRight",
              color: "green"
            })
            getCategoryData()
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
      <BreadCrumbs title={'/category'} title1={'/view category'} />

      <div className='max-w-full mx-auto border-2 border-slate-100 mt-5 py5'>
        <div className='bg-slate-100 flex justify-between items-center border-b-1 border-slate-100 px-5'>
          <div>
            <h1 className='text-2xl font-bold'>View Category</h1>
          </div>

          <div className=' flex gap-5 p-5 '>
            <button className='bg-blue-700 text-white p-2 rounded text-2xl'><IoIosFunnel /></button>
            <button className='px-3 py-2 text-white font-fold bg-[#15803D] rounded-[4px] cursor-pointer' onClick={updateStatus}>Change Status</button>
            <button className='px-3 py-2 text-white font-fold bg-[#B91C1C] rounded-[4px] cursor-pointer' onClick={deleteCategory}>Delete</button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='text-gray-600 text-sm'>
                <th className='py-3'>
                  <input type="checkbox" onChange={allCheck} checked={ids.length == data.length} />
                </th>
                <th className='text-left py-3'>	Sl.No</th>
                <th className='text-left py-3'>Name</th>
                <th className='text-left py-3'>	Image</th>
                <th className='text-left py-3'>	Order</th>
                <th className='text-left py-3'>Status</th>
                <th className='text-left py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((obj, index) => {
                  return (
                    <tr key={obj._id} className='hover:bg-gray-50'>
                      <td className='py-4 text-center'>
                        <input onChange={getCheckValue} type="checkbox" value={obj._id} checked={ids.includes(obj._id)} />
                      </td>
                      <td>{index + 1}</td>
                      <td>{obj.name}</td>
                      <td><img width={40} src={path + obj.image} alt="" /></td>
                      <td>{obj.order}</td>
                      <td><span className={`px-3 py-1 rounded-full text-sm text-white ${obj.status ? "bg-green-500" : "bg-red-500"}`}>{obj.status ? "Active" : "Inactive"}</span></td>
                      <td className='text-center'>
                      <Link to={`/parentcatagory/edit/${obj._id}`} >
                        <button className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600'><BiPencil /></button>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
