
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
  // Logika login dummy
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json({ success: true, role: 'admin' });
  } else {
    res.status(401).json({ success: false, message: 'Login gagal' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
