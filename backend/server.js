const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint
app.get('/api/message', (_req, res) => {
  res.json({ msg: 'Hello from API' });
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});