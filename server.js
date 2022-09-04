//dependancies andexpress app
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const fs = require("fs");
const path = require('path');



//listener app
app.listen(PORT, () =>
  console.log(`good copy, good buddy, at http://localhost:${PORT}`)
);

