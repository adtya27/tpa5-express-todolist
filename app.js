const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./config/db');
const allRoutes = require('./routes');

db.then(() => {
  console.log('Berhasil konek ke MonggoDB');
}).catch(() => {
  console.log('gagal konek ke MonggoDB');
});

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log('server running on port ' + PORT);
});
