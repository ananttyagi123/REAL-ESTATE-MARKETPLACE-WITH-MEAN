import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase';

export default function OAuth() {
  const handleAuth = () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      console.log(auth);
      const result = signInWithPopup(auth, provider);
      console.log(result);
    }
    catch (error) {
      console.log("couldn't Sign in with Google!", error);
    }
  };
  return (<>

    <button className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 my-2 uppercase' onClick={handleAuth}>Continue with google</button>
  </>
  )
}

