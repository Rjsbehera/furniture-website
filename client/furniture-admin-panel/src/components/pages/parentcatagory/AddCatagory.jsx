import React, { useEffect, useRef, useState } from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'
import { useDropzone } from 'react-dropzone'
import { useNavigate, useParams } from 'react-router'
import izitoast from 'izitoast';
import axios from 'axios';

export default function AddCatagory() {
  let { id } = useParams()
  let [editData, setEditData] = useState(null)
  const formRef = useRef()
  const handleClick = () => {
    formRef.current.reportValidity()

  }

  let Navigate = useNavigate()
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH

  const [file, setFile] = useState(null)

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop: (acceptedfiles) => {
      setFile(
        object.assign(acceptedfiles[0], {
          preview: URL.createObjectURL(acceptedfiles[0]),
        })
      )
    }
  })

  let handleCategory = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    if (id) {
      //update
      axios.put(`${apiBaseUrl}category/update/${id}`, formData)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/parentcatagory/viewcatagory')
          }
          else {
            izitoast.error({
              title: 'Error',
              message: finalRes.error.name,
              position: 'topRight',
              color: 'red'
            });
          }
        })
    }
    else {
      axios.post(`${apiBaseUrl}category/create`, formData)
        .then((res) => res.data)
        .then((finalRes) => {
          console.log(finalRes)
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.name,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/parentcatagory/viewcatagory')
          }
          else {
            izitoast.error({
              title: 'Error',
              message: finalRes.error.name,
              position: 'topRight',
              color: 'red'
            });
          }
        })
    }
  }
  useEffect(() => {
    if (id) {
      axios.get(`${apiBaseUrl}category/details/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          setEditData(finalRes.data)
        })
    }
    else {
      setEditData(null)
    }
  }, [id])


  return (
    <>
      <BreadCrumbs title={'/category'} title1={'/add category'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <form onSubmit={handleCategory} action="" ref={formRef}>
            <div>
              <h1>Category Image</h1>
              <div className='grid grid-cols-[35%_60%] gap-[3%]'>
                <div className="w-full">
                  <div
                    {...getRootProps()}
                    className="relative border-2 border-dashed border-gray-300 rounded-lg h-72 flex justify-center items-center cursor-pointer overflow-hidden"
                  >
                    <input type='file' name='image' />

                    {/* <input {...getInputProps()}  name='image' />
                    {!file ? (
                      <div className="text-center text-gray-500">
                        <svg
                          className="mx-auto h-12 w-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                        </svg>

                        <p className="mt-2">Drag and drop</p>
                      </div>
                    ) : (
                      <>
                        <img
                          src={file.preview}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
                          <p className="font-semibold">{file.name}</p>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile();
                            }}
                            className="mt-4 border border-white px-5 py-2 hover:bg-white hover:text-black"
                          >
                            REMOVE
                          </button>
                        </div>
                      </>
                    )} */}
                  </div>
                </div>
                <div>
                  <label htmlFor="">Category Name
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 px-3 mb-3' type="text" name='name'
                    defaultValue={editData?.name} required />
                  </label>
                  <label htmlFor="">Order
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 px-3 mb-3' type="text" name='order'
                    defaultValue={editData?.order} required />
                  </label>
                </div>
              </div>
              <button type='submit' className='mt-5 px-3 py-2 text-white bg-[#7E22CE] rounded-[8px] cursor-pointer' onClick={handleClick}>Add Sub Category</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
