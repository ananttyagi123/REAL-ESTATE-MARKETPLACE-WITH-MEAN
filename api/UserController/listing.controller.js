
export const createListing = async (req, res) => {
  try {
    const listing = await listing.create(req.body);
  } catch (error) {
    console.log(error);
  }
}