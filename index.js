require('dotenv').config();

const express = require('express');
const port = process.env.APP_PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Bon arrivé!!',
  });
});

app.listen(port, () => {
  console.log('Server Runnig!!');
  console.log('Go to http://localhost:' + port);
});
