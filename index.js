const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008; // Change this to the desired port number

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'URLs parameter is missing or not an array' });
  }

  const results = [];

  try {
    const promises = urls.map(url => axios.get(url));
    const responses = await Promise.all(promises);

    for (const response of responses) {
      const data = response.data;
      if (data && data.numbers && Array.isArray(data.numbers)) {
        results.push(...data.numbers);
      }
    }

    return res.json({ numbers: results });
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving data from one or more URLs' });
  }
});

app.listen(port, () => {
  console.log ("Server is running on http://localhost:${port} ");
}
);