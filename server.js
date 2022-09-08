//dependancies and express app
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const fs = require("fs");
const path = require('path');

// boilerplate?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))



//listener app
app.listen(PORT, () =>
  console.log(`good copy, good buddy, at http://localhost:${PORT}`)
);

