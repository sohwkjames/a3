const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const mysql = require("mysql");

const routes = require("./routes/routes");
app.use(routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
