import React from 'react'
import classes from './login.module.css';
const Login = () => {
  return (


<section className='flex justify-center items-center h-screen '>

    <div className='border w-1/5 border-gray-800 align center  rounded-lg shadow-gray-800  '>

      <h1 className='text-center font-bold my-10 text-3xl'>Login</h1>

      <div>

        <form className='text-xl p-8  space-y-4'>

          <label htmlFor="email" >Email</label><br />
          <input type="text" placeholder='Enter your email here' className='border border-gray-800 w-full ' /><br />


          <label htmlFor="pasword">Password</label><br />
          <input type="password" placeholder='Enter your password here' className='border border-gray-800 w-full ' /><br />
          <div className='flex justify-between items-center'>
          <button className='border w-1/2 mx-auto  rounded-lg bg-blue-500 text-white text-center'>Submit</button>
          </div>
          

          <button className={classes.localBtn} >Local button</button>


        </form>


      </div>

    </div>

    </section>

  )
}


export default Login;