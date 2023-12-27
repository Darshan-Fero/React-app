const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

const allowedHosts = [
  "http://127.0.0.1:3333",
  "http://127.0.0.1:3333/",
  "http://localhost:3333",
  "http://localhost:3333/",
]

// Check Origin 
app.use((req, res, next) => {
  const origin = req.get("Origin") || req.get("Referer") || "";

  let cond = false;
  for (var host of allowedHosts) {
    if (origin === host) {
      cond = true;
      break;
    }
  }

  if (cond) next();
})

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
  console.log(`Content Delivery Network listening at http://localhost:${port}`);
});
