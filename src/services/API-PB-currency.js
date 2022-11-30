import axios from 'axios';

// const URI = 'https://ewallet-api.onrender.com/api/currency?type=';
// axios baseURL set in the index.js

export async function fetchCurrency(currencyType) {
  const response = await axios
    .get(`/currency?type=${currencyType}`)
    .then(res => {
      return res.data;
    });
  return response;
}
