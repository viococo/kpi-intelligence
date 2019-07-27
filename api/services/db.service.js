// Import
const mongoose = require("mongoose");

// Configuration
const initClient = () => {
  return new Promise((resolve, reject) => {
    const url = "http://mongodb://localhost/kpi-violaine";
    mongoose
      .connect(url, { useNewUrlParser: true })
      .then(db => resolve({ db: db, url: url }))
      .catch(error => reject(`MongoDB not connected`, error));
  });
};

// Export
module.exports = { initClient };
