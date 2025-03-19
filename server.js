const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/env', (req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME,
    APP_VERSION: process.env.APP_VERSION
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});