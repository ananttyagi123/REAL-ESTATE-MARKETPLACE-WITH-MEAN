import { useState, useEffect } from 'react';
import '..//index.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  // CREATING A STATE FOR EVENT 
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Set loading to true when component mounts
  }, []); // Empty dependency array means it runs only once on mount

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/Signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
    }
    setLoading(false); // Always set loading to false after request completes
    console.log(data);
  }

  console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-5'>{loading ? 'loading...' : 'Sign up'}</button>
      </form>
      <div className="text-slate-900 p-2 mt-4 flex  gap-4">
        <p>Have an account?</p>
        <Link to='/SignIn'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup;
