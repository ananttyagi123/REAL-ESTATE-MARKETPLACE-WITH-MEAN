import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Header() {

  return (<>
    <header className='bg-slate-600 shadow-md p-4'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            < span className='text-slate-500'>Real</span>
            <span className='text-slate-800'>E-state</span>
          </h1>
        </Link>
        <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline  hover:underline decoration-sky-500 text-white'>Home</li>
          </Link>
          <Link to='/About'>
            <li className=' hover:underline decoration-sky-500 text-white'>About</li>
          </Link>
          <Link to='/SignIn'>
            <li className=' hover:underline decoration-sky-500 text-white'>SignIn</li>
          </Link>
          <Link to='/Profile'>
            
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AYwemTu1ORazF2Jjt1WGW_X-nKQ3r7SEJw&usqp=CAU" alt="profile" className="flex justify-end rounded-full h-10 w-10 ml-5" />
          </Link>
        </ul>
      </div>



    </header>
  </>

  )
}