import mongoose from "mongoose";
const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice:{
      type:number,
      required:true,
    },
    discountPrice:{

    }

  }
)