import react, { useState } from "react";
import app from "./firebase";
import { getStorage, getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

const CreateListing = () => {
  const [files, setFile] = useState('');
  console.log(files);
  const [formData, SetForm] = useState({
    imagesURLS: [],
    name: '',
    discription: '',
    address: '',
    type: 'rent',
    bedroom: 1,
    bathroom: 2,
    parking: false,
    regularParicing: 5,
    discountPrice: 972,
    offer: false,
    furnished: false

  })
  const [imageUploadError, SetupImageUploadError] = useState(true);

  const [uploading, uploadImage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(formData);

  const handleImage = () => {

    if (files.length > 0 && files.length < 7) {
      const promises = [];
      for (var i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]))
        uploadImage(true);
      }
      Promise.all(promises).then((url) => {
        SetForm({
          ...formData, imagesURLS: formData.imagesURLS.concat(url)
        })
        SetupImageUploadError(false);
        uploadImage(false)
      }).catch((error) => {
        SetupImageUploadError('Image upload Failed!!! max limit reached')
      })

    }

  }

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = snapshot.totalBytes ? (snapshot.bytesTransferred / snapshot.totalBytes) * 100 : 0;
          console.log(progress);

          console.log('image uploaded sucessfully');

        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          }).catch((error) => {
            reject(error);
          });
        }
      );
    });
  };


  const deleteImage = () => {
    SetForm({
      ...formData,
      imagesURLS: formData.imagesURLS.filter((_, i) => i !== index)
    })
  }

  const handeChange = (e) => {
    if (e.target.id === 'sale' || e.target.id === 'rent') {
      SetForm({
        ...formData,
        type: e.target.id
      })
    }
    if (e.target.id === 'parking' || e.target.id === 'furnished' || e.target.id === 'offer') {
      SetForm({
        ...formData,
        [e.target.id]: e.target.checked
      });
    }
    if (e.target.id === 'bedroom' || e.target.id === 'bathroom' || e.target.id == 'discount' || e.target.type === 'regular') {
      SetForm({
        ...formData,
        [e.target.id]: e.target.value
      });
    }

    if (e.target.id === 'name' || e.target.id === 'discription' || e.target.id === 'address') {
      SetForm({
        ...formData,
        [e.target.id]: e.target.value
      });
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = 'Couldn\'t submit the listing';
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('api/listing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Corrected header key
        },
        body: JSON.stringify(formData) // formData should not be wrapped in curly braces
      });
      const data = await res.json(); // Corrected to await res.json() to properly parse response
      setLoading(false);
      if (res.ok) {
        // Check if response is successful
        // Assuming your API returns data.success to indicate success or failure
        if (!data.success) {
          setError(data.error || errorMessage); // If data.success is false, set error message from response or default message
        } else {
          // Handle success scenario if needed
        }
      } else {
        setError(errorMessage); // Handle non-OK response
      }
    } catch (error) {
      setError(errorMessage); // Handle any errors during fetch or JSON parsing
    } finally {
      setLoading(false); // Ensure loading state is set to false regardless of success or failure
    }
  };


  return (<>
    <h1 className="text-3xl font-semibold text-center my-7">Create a Listing</h1>
    <main className="mx-auto p-3 max-w-4xl ">
      <form className="flex flex-row sm:flex-row gap-2">
        <div className="flex flex-col gap-4 flex-1">
          <input onChange={handeChange} value={formData.name} type="text" placeholder="Name" className="border p-3 rounded-lg rounded-2xl border-slate-400" id="name" maxLength="62" />
          <input onChange={handeChange} value={formData.discription} type="text" placeholder="Discription" className="border p-3 rounded-lg rounded-2xl border-slate-400" id="discription" maxLength="62" />
          <input onChange={handeChange} value={formData.address} type="text" placeholder="Address" className="border p-3 rounded-lg rounded-2xl border-slate-400" id="address" maxLength="62" />
          <div className="flex flex-wrap gap-3">
            <img src={formData?.avatar} alt="" />
            <input onChange={handeChange} checked={formData.sell} className="m-2 " type="checkbox" id="sale" />
            <span>sell</span>
            <input onChange={handeChange} checked={formData.rent} className="m-2" type="checkbox" id="rent" />
            <span>Rent</span>
            <input onChange={handeChange} checked={formData.parking} id='parking' className="m-2" type="checkbox" />
            <span>Parking</span>
            <input onChange={handeChange} checked={formData.furnished} id='furnished' className="m-2" type="checkbox" />
            <span>Furnished</span>
            <input onChange={handeChange} checked={formData.offer} id='offer' className="m-2" type="checkbox" />
            <span>Offer</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <input onChange={handeChange} value={formData.bedroom} className="p-3 border border-gray-300 rounded-lg" type="number" id="bedroom" min="1" max="10" required />
              <p className="p-3 m-2">Beds</p>
            </div>
            <div className="flex items-center ">
              <input onChange={handeChange} value={formData.bathroom} className="p-3 border border-gray-300 rounded-lg" type="number" id="bathroom" min="1" max="10" required />
              <p className="p-3 m-2">Bath</p>
            </div>
            <div className="flex items-center ">
              <input onChange={handeChange} value={formData.regularParicing} className="p-3 border border-gray-300 rounded-lg" type="number" id="regular" min="50" max="100000" required />
              <p className="p-3 m-2">Regular Price</p>
              <span>($/month)</span>
            </div>

            <input onChange={handeChange} value={formData.discountPrice} className="p-3 border border-gray-300 rounded-lg" type="number" id="discount" min="50" max="10000" required />
            <p className="p-3 m-2">Discount Price </p>
            <span>($/month)</span>
          </div>
          <div className="flex flex-col flex-1">
            <p className="font-semibold">Images:<span className="font-normal text-gray-400 ml-2">The first image will ne cover (max=6)</span></p>
            <div className="">
              <input onChange={(e) => {
                setFile(e.target.files)
              }} className="p-3 border border-gray-300 rounded-w-full" type="file" accept="image/*" id="images" multiple />
              <button type='button' onClick={handleImage} className='text-green-700 border border-green-700 rounded-uppercase rounded-lg p-3 m-5'>{uploading ? 'Uploading ' : 'Upload'}</button>
              <div className="flex flex-row">{

                formData.imagesURLS.length > 0 && formData.imagesURLS.map((url) => (
                  <>
                    <div className="flex flex-row">
                      <img src={url} alt="" className="h-40 w-40 flex flex-row object-cover rounded-lg" />
                      <button type='button' className="border border-3xl rounded-lg p-1 bg-red-400 w-18 h-10 p-3 m-3 uppercase" onClick={() => deleteImage(index)}>delete</button>

                    </div>

                  </>


                ))
              }</div>
            </div>
          </div>
          <div className="text-center">
            <button className=' text-center pl-5 bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 max-w-48 ' onClick={handleSubmit}>{loading ? 'Creating....' : 'created'}</button></div>
          {error}
        </div>
        <p className="text-red-700">{imageUploadError && imageUploadError}</p>
      </form>

    </main>
  </>
  )
}



export default CreateListing;

