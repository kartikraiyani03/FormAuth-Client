import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="mx-auto w-full">
        <h1 className='text-center text-4xl text-greenLight font-bold'>Home Page</h1>
        <div className="w-4/12 h-[200px] mx-auto my-[200px] flex justify-evenly items-center border-2 border-greenLight p-4 rounded-3xl
        ">
            <Link to="/login">
              <button className='w-full mx-auto hover:bg-greenLight text-xl px-10 py-2 hover:text-white rounded-2xl
                    text-greenLight border-greenLight border-2 bg-white hover:shadow-2xl hover:shadow-greenLight'>Login
              </button></Link>  

            <Link to="/signup">
              <button className='w-full h-[50px] mx-auto bg-greenLight text-lg px-10 py-2  text-white rounded-2xl
                    hover:text-greenLight hover:border-greenLight border-2 hover:bg-white hover:shadow-2xl hover:shadow-greenLight'>Signup
              </button>
            </Link>           
        </div>
    </div>
  )
}

export default Home