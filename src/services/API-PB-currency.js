import axios from 'axios';

const URI = 'https://ewallet-api.onrender.com/api/currency?type=';

export async function fetchCurrency(endpoint) {
  const response = await axios.get(`${URI}${endpoint}`).then(res => {
    return res.data;
  });
  return response;
}
