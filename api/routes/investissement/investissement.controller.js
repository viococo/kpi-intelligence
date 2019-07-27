// Import
const InvestissementModel = require("../../models/investissement.model");

// Fonctions
const add = investissement =>
  new Promise((resolve, reject) => {
    const { notification_du_marche, cao_attribution } = investissement;
    if (!!notification_du_marche)
      investissement.notification_du_marche = new Date(notification_du_marche);
    if (!!cao_attribution)
      investissement.cao_attribution = new Date(cao_attribution);

    InvestissementModel.create(investissement);

    console.log(investissement);
  });

const addMany = investissements =>
  new Promise((resolve, reject) => {
    const newInverstissements = investissements.map(investissement => {
      const { notification_du_marche, cao_attribution } = investissement;
      if (!!notification_du_marche)
        investissement.notification_du_marche = new Date(
          notification_du_marche
        );
      if (!!cao_attribution)
        investissement.cao_attribution = new Date(cao_attribution);
      return investissement;
    });

    InvestissementModel.create(newInverstissements, (err, investissements) => {
      if (err) return reject(err);
      return resolve(investissements);
    });
  });

const find = filter =>
  new Promise((resolve, reject) => {
    InvestissementModel.find(filter, (err, investissements) => {
      if (err) return reject(err);
      return resolve(investissements);
    });
  });

// Exports
module.exports = { add, addMany, find };
