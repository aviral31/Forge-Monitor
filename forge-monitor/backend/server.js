const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  fs.appendFileSync('/app/logs/app.log', `Ping at ${new Date().toISOString()}\n`);
  res.send('Backend is running and logging!');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));