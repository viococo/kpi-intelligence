// Imports
//// NodeJS
const express = require("express");
const bodyParser = require("body-parser");
//// Inner
const mongoDB = require("./services/db.service");
const { mainRouter } = require("./routes/main.router");
//

// Configurations servers
const port = 4000;
const server = express();

// Body parser
server.use(bodyParser.json({ limit: "10mb" }));
server.use(bodyParser.urlencoded({ extended: true }));

// CORS
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
