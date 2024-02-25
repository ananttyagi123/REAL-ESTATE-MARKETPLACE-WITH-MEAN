import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Listing(){
  const [listing,setListing] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  const param = useParams();
  useEffect(()=>{
    const FetchListing = async ()=>{

      try{
        const res = await fetch(`/api/listing/get/${param.listingId}`)
        const data = res.json();
        if(data.success===false){
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        
      }catch(error){
      setError(true);
      setLoading(false);
          }

    };
    FetchListing();
  })
  return (
    <>
      <div>{listing && listing.name}</div>
    </>
   

  )
}