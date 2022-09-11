//dependancies and express app
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// const fs = require("fs");
// const path = require("path");

//routes
const apiRoute = require("./routes/api-routes");

const clientRoute = require("./routes/client-routes");

// boilerplate?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoute);
app.use("/", clientRoute);

//listener app
app.listen(PORT, () =>
  console.log(`good copy, good buddy, at http://localhost:${PORT}`)
);


//