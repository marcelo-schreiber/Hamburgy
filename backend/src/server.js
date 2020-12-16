const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("*", errorHandler);

app.listen(PORT, () => {
  console.log(`Hamburgy backend running on port ${PORT}!`);
});
