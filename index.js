const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Ứng Dụng Tìm Việc Nửa Giờ!');
});

app.listen(port, () => {
  console.log(`Server chạy trên http://localhost:${port}`);
});