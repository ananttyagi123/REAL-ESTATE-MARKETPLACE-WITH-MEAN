import { express } from "express";
import { createListing } from "../UserController/Listing.controller";
const router = express.Router();

router.post('/create',createListing)