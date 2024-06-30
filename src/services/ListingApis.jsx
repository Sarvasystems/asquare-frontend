import axios from "axios";

export const BuyListingApi = async () => {
  const response = await axios.get(`http://localhost:5000/api/rentallistings/`);
  return response.data;
};
