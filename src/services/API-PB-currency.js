import axios from 'axios';

const URI = 'http://localhost:3001/api/currency';

export async function fetchCurrency() {
  const response = await axios
    .get(URI, {
      headers: {
        'Access-Control-Allow-Origin': true,
        'Access-Control-Allow-Credentials': true,
      },
    })
    .then(res => {
      console.log(res);
      return res;
    });
  console.log('res', response);

  return response;
}
console.log(fetchCurrency(URI));
