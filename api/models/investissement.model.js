// Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Définition
const investissementSchema = new Schema({
  titreoperation: String,
  entreprise: String,
  annee_de_livraison: String,
  ville: String,
  mandataire: String,
  ppi: String,
  lycee: String,
  notification_du_marche: Date,
  codeuai: String,
  longitude: mongoose.Decimal128,
  etat_d_avancement: String,
  montant_des_ap_votes_en_meu: mongoose.Decimal128,
  cao_attribution: Date,
  latitude: mongoose.Decimal128,
  maitrise_d_oeuvre: String,
  mode_de_devolution: String,
  annee_d_individualisation: String,
  enveloppe_prev_en_meu: mongoose.Decimal128
});

// Export
const InvestissementModel = mongoose.model(
  "investissement",
  investissementSchema
);
module.exports = InvestissementModel;
//
