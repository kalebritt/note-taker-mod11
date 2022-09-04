//dependancies
const express = require('express');
const fs = require("fs");
const path = require('path');

//express app
const PORT = process.env.PORT || 3000;
const app = express();


//listener app
app.listen(PORT, () =>
  console.log(`good copy, good buddy:${PORT}`)
);

