// Import
const fs = require("file-system");
const investissementController = require("../investissement/investissement.controller");

// Fonctions
const isInit = () => new Promise((resolve, reject) => resolve());
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
