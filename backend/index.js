// backend/index.js
const express = require('express');
const app = express();
const port = 3001; // O el puerto que prefieras

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
