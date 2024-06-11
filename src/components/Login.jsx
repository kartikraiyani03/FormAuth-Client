import React, { useState } from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let [ email, setEmail ] = useState()
    let [ password, setPassword ] = useState()
    let nav = useNavigate()

    let handleSubmit = (e) =>
        {
            e.preventDefault()
            axios.post('https://form-auth-client.vercel.app/login',{email,password})
            .then(res =>  
            {
                    console.log(res.data) 
                    if(res.data === "Success")
                    {
                        nav('/dashboard')
                    }
                    else
                    {
                        console.log("Incorrect Passsword")
                    }
            })
            .catch(err => console.log('Error:', err.response ? err.response.data : err.message))

        }

    return (
        <div>
            <div className="mx-auto w-full">
                <form onSubmit={handleSubmit} action="" className='p-5 mx-auto w-4/12 mt-[100px] h-[430px] shadow-2xl rounded-xl pt-2 flex flex-col justify-evenly border'>
                    <h1 className='mx-auto text-4xl my-2 mb-3 text-greenLight font-bold'>Login</h1>

                    <input type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} className='mx-auto border-gray-200 bg-gray-200 p-3 text-black text-md w-full h-[50px] rounded-2xl hover:border-greenLight border-2 hover:bg-gray-100' />

                    <input type="password" placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} className='mx-auto border-gray-200 bg-gray-200 text-black p-3 text-md w-full h-[50px] rounded-2xl hover:border-greenLight border-2 hover:bg-gray-100' />

                    <button type="submit"  className='w-full h-[50px] mx-auto bg-greenLight text-lg  text-white rounded-2xl
                    hover:text-greenLight hover:border-greenLight border-2 hover:bg-white hover:shadow-2xl hover:shadow-greenLight'>Login</button>

                    <p className='text-center text-2xl'>OR</p>
                    <Link to="/signup"><button className='w-full h-[50px] mx-auto hover:bg-greenLight text-lg  hover:text-white rounded-2xl
                    text-greenLight border-greenLight border-2  bg-white hover:shadow-2xl hover:shadow-greenLight'>Signup</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login
