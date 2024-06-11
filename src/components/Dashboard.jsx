import React from 'react'
import '../index.css'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Dashboard = () => {

  let [users,setUsers] = useState([])

  useEffect(() =>
  { 
    axios.get('https://form-auth-client.vercel.app/getData')
    .then((user) => setUsers(user.data)) 
    .catch((e) => console.log(e))
  },[])

  return (
    <div className='mx-auto flex flex-col'>
      <h1 className='text-center text-greenLight text-3xl mt-10 font-bold'>Dashboard</h1>

      <table className='w-4/12 mx-auto rounded-2xl shadow-xl text-center mt-20'>
        <thead className='font-bold rounded-2xl'>
        <tr className='bg-gray-100 text-gray-600 uppercase text-md leading-normal'>
          <th className='py-3 px-6 text-center'>Name</th>
          <th className='py-3 px-6 text-center'>Email</th>
        </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-bold'>
        {
            users.map(user => 
            {
              return <tr className='px-10 py-5'>
                 <td className='py-2'>{user.name}</td>
                 <td>{user.email}</td>
              </tr>
            })
        }
        </tbody>
      </table>
       
    </div>
  )
}

export default Dashboard
