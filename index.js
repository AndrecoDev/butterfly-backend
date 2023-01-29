const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = require("./src/app");
const server = express();
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((e) => console.log("Error Connected " + e));

server.use("/api/v1", app);

let port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
