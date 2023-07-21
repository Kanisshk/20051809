const axios = require('axios');

async function makeRequest() {
  const url = 'http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://20.244.56.144/numbers/fibo&url=http://20.244.56.144/numbers/odd';

  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

makeRequest();