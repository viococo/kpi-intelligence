// Import
const fs = require("file-system");
const investissementController = require("../investissement/investissement.controller");

// Fonctions
const isInit = () =>
  new Promise((resolve, reject) => {
    investissementController
      .find()
      .then(data => {
        if (data.length > 0) return resolve(true);
        return resolve(false);
      })
      .catch(err => reject(err));
  });
const init = () =>
  new Promise((resolve, reject) => {
    let data = fs.readFileSync("./data/data.json");
    let investissements = JSON.parse(data);

    investissementController
      .addMany(investissements)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

// Exports
module.exports = { isInit, init };
