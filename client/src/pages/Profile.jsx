import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/index.css'
import { useRef } from 'react'
import app from './firebase.js';
import user from '../../../api/Usermodel/user.model.mjs';
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
const src1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AYwemTu1ORazF2Jjt1WGW_X-nKQ3r7SEJw&usqp=CAU"
const Profile = () => {
  const [file, setFile] = useState(undefined);
  const [perc, setPerc] = useState(0);
  const [img1, img2] = useState(src1);


  // UPDATING THE FORM DATA 

  const [formData, setForm] = useState({});
  console.log(formData);


  const Fileref = useRef(undefined);
  const handleColor = (e) => {
    e.target.className = 'border p-3 m-2 rounded-lg bg-slate-500'
  }

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    // imported from firebase 
    const Storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const StorageRef = ref(Storage, fileName);
    const uploadTask = uploadBytesResumable(StorageRef, file);
    getDownloadURL(StorageRef).then((downloadURL) => {
      // Update the img1 state with the download URL for the image
      img2(downloadURL);
      setForm({ ...formData, avatar: downloadURL });
    }).catch((error) => {
      console.error('Error getting download URL:', error);
    });
    
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = snapshot.totalBytes ? (snapshot.bytesTransferred / snapshot.totalBytes) * 100 : 0;
        setPerc(Math.round(progress));
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        // Upload completed successfully
        console.log('Upload completed!');
        img2(formData?.avatar);
        getDownloadURL(StorageRef).then((downloadURL) => {
          // Update the form data state with the download URL
          setForm({ ...formData, avatar: downloadURL });
        }).catch((error) => {
          console.error('Error getting download URL:', error);
        });
      }
    );
  }

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = () => {
    e.preventDefault();

  }

  return (<>
    <div className='text-center mt-3 '>
      <h1 className='text-3xl'>Profile</h1>
    </div>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'></h1>
      <form onSubmit={handleSubmit} className='flex flex-col' action="">

        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={Fileref} hidden accept='image/.*' />
        <img onClick={() => Fileref.current.click()} src={img1} alt="profile" className='rounded-full h-24 w-24 self-center mt-2 mb-3' />
        <p className='text-sm self-center'>
          {file ? (
            <span className='text-red-700'>
              <span className='text-green-700'>Image successfully uploaded!</span>
            </span>
          ) : perc > 0 && perc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${perc}%`}</span>
          ) : perc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
          ''
          )}
        </p>



        <input defaultValue={formData.username} onChange={handleChange} type="text" placeholder='username' className='border p-3 m-2 rounded-lg bg--500' onClick={handleColor} />
        <input defaultValue={formData.email} onChange={handleChange} type="text" placeholder='email' className='border p-3 m-2 rounded-lg bg-white-500' onClick={handleColor} />
        <input defaultValue={formData.password} onChange={handleChange} type="text" placeholder='password' className='border p-3 m-2 rounded-lg bg-white-500' onClick={handleColor} />
        <button className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-[20px]'>UPDATE</button>

        <Link to={"/createlisting"}>
          <button className='bg-amber-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-[20px] w-full h-auto'>CREATE LISTING</button>
        </Link>

      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-500 cursor-pointer text-semibold'>Delete Account</span>
        <span className='text-red-500 cursor-pointer text-semibold'>Sign out</span>
      </div>
    </div>
  </>
  )

}

export default Profile;

