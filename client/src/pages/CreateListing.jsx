import react from "react";

const createListing = () => {
  return (<>
    <h1 className="text-3xl font-semibold text-center my-7">Create a Listing</h1>
    <main className="mx-auto p-3 max-w-4xl ">
      <form className="flex flex-row sm:flex-row gap-2">
        <div className="flex flex-col gap-4 flex-1">
          <input type="text" placeholder="Name" className="border p-3 rounded-lg rounded-2xl border-slate-400" id="name" maxLength="62" />
          <input type="text" placeholder="Discription" className="border p-3 rounded-lg rounded-2xl border-slate-400" id="name" maxLength="62" />
          <input type="text" placeholder="Address" className="border p-3 rounded-lg rounded-2xl border-slate-400" id="name" maxLength="62" />
          <div className="flex flex-wrap gap-3">
            <input className="m-2 " type="checkbox" />
            <span>sell</span>
            <input className="m-2" type="checkbox" />
            <span>Rent</span>
            <input className="m-2" type="checkbox" />
            <span>Parking</span>
            <input className="m-2" type="checkbox" />
            <span>Furnished</span>
            <input className="m-2" type="checkbox" />
            <span>Offer</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <input className="p-3 border border-gray-300 rounded-lg" type="number" id="bedroom" min="1" max="10" required />
              <p className="p-3 m-2">Beds</p>
            </div>
            <div className="flex items-center ">
              <input className="p-3 border border-gray-300 rounded-lg" type="number" id="bedroom" min="1" max="10" required />
              <p className="p-3 m-2">Bath</p>
            </div>
            <div className="flex items-center ">
              <input className="p-3 border border-gray-300 rounded-lg" type="number" id="bedroom" min="1" max="10" required />
              <p className="p-3 m-2">Regular Price</p>
              <span>($/month)</span>
            </div>

            <input className="p-3 border border-gray-300 rounded-lg" type="number" id="bedroom" min="1" max="10" required />
            <p className="p-3 m-2">Discount Price </p>
            <span>($/month)</span>
          </div>
          <div className="flex flex-col flex-1">
            <p className="font-semibold">Images:<span className="font-normal text-gray-400 ml-2">The first image will ne cover (max=6)</span></p>
            <div className="">
              <input className="p-3 border border-gray-300 rounded-w-full" type="file" accept="" id="images/*" multiple />
              <button className='text-green-700 border border-green-700 rounded-uppercase rounded-lg p-3 m-5'>Upload</button>
            </div>
          </div>
          <div className="text-center"><button className=' text-center pl-5 bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 max-w-48 '>Create listing</button></div>


        </div>

      </form>

    </main>
  </>
  )
}

export default createListing;