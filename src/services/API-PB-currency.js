import axios from 'axios';

const URI = 'https://ewallet-api.onrender.com/api/currency?type=';

export async function fetchCurrency(currencyType) {
  const response = await axios.get(`${URI}${currencyType}`).then(res => {
    return res.data;
  });
  return response;
}
