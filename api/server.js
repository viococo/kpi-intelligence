// Imports
//// NodeJS
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//// Inner
const mongoDB = require("./services/db.service");
const { mainRouter } = require("./routes/main.router");
//

// Configurations servers
const port = process.env.PORT;
const server = express();

// Body parser
server.use(bodyParser.json({ limit: "10mb" }));
server.use(bodyParser.urlencoded({ extended: true }));

// Router
server.use("/", mainRouter);

// Démarrage du server
mongoDB
  .initClient()
  .then(() => {
    server.listen(port, () =>
      console.log(`API is alive on http://localhost:${port} !`)
    );
  })
  .catch(console.log);
