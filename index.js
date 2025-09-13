const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Half-Hour Job Finder Application!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});