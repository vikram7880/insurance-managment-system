'use client';

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManagePolicy = () => {

    const [policy, setPolicy] = useState([]);

    const getPolicy = async() => {
        const res = await fetch("http://localhost:5000/insurance/getall")
        console.log(res.status);
        const data = await res.json()
        console.log(data);
        setPolicy(data);
    }

    useEffect(() => {
      getPolicy();
    },[])

    const deletePolicy = async(id) => {
        console.log(id);
        const res = await fetch("http://localhost:5000/insurance/delete/" +id,{
            method:"DELETE",
        }).then((res) => {
            if(res.status === 200){
                toast.success("Policy deleted successfully")
                getPolicy();
            }else{
                toast.success("error")
            }
        })
    }

    const displayPolicy = () => {
        return(
            <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                  Provider
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                  Premium
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                  Period
                </th>
               
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-lg font-bold text-white uppercase "
                >
                  Action
                </th>
              </tr>
            </thead>
            {
                policy.map((policy) => {
                    return(
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                <img src={"http://localhost:5000/" +policy.cover} alt="" style={{height:80}} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  {policy.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
               {policy.provider}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                 {policy.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {policy.premium}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                 {policy.period}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                  onClick={ e => deletePolicy(policy._id)}
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
             
            </tbody> 
                    )
                })
            }
            
          </table>
        )
    }
  return (
    <div>
        <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        {
            displayPolicy()
        }
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ManagePolicy