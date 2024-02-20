import React from 'react'
import '../pages/index.css'
const Profile = () => {
  const handleColor = (e) => {
    e.target.className = 'border p-3 m-2 rounded-lg bg-slate-500'
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'></h1>
      <form className='flex flex-col' action="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AYwemTu1ORazF2Jjt1WGW_X-nKQ3r7SEJw&usqp=CAU" alt="profile" className='rounded-full h-24 w-24 self-center mt-2' />
        <input type="text" placeholder='username' className='border p-3 m-2 rounded-lg bg--500' />
        <input type="text" placeholder='email' className='border p-3 m-2 rounded-lg bg-white-500' />
        <input type="text" placeholder='password' className='border p-3 m-2 rounded-lg bg-white-500' onClick={handleColor} />
        <button className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-[20px]'>UPDATE</button>
        <button className='bg-amber-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-[20px]'>CREATE LISTING</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-500 cursor-pointer text-semibold'>Delete Account</span>
        <span className='text-red-500 cursor-pointer text-semibold'>Sign out</span>
      </div>
    </div>
  )
}

export default Profile;
