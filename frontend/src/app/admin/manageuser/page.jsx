'use client';

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [users, setUsers] = useState([]);

    const getUser = async() => {
        const res = await fetch("http://localhost:5000/user/getall")
        console.log(res.status);
        const data = await res.json()
        console.log(data);
        setUsers(data);
    }

    useEffect(() => {
      getUser();
    },[])

    const deleteUser = async(id) => {
        console.log(id);
        const res = await fetch("http://localhost:5000/user/delete/" +id,{
            method:"DELETE",
        }).then((res) => {
            if(res.status === 200){
                toast.success("User deleted successfully")
                getUser();
            }else{
                toast.success("error")
            }
        })
    }

    const displayUser = () => {
        return(
            <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                 Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                 Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                 Password
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-lg font-bold text-white uppercase "
                >
                 CreatedAt
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
                users.map((user) => {
                    return(
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr>
               
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
               {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                 {user.password}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {user.createdAt}
                </td>
               
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                  onClick={ e => deleteUser(user._id)}
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
            displayUser()
        }
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ManageUser