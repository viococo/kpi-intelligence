// Imports
//// NodeJS
const { Router } = require("express");
//// Interne
const {
  sendApiSuccessResponse,
  sendApiErrorResponse
} = require("../../services/response.service");
const { find } = require("./investissement.controller");
//

//Initiation routeur
const investissementRouter = Router();

// Définition des routes
class InvestissementRouterClass {
  constructor() {}

  routes() {
    // Recherche par avancement
    investissementRouter.get("/avancement/:avancement", (req, res) => {
      const { avancement } = req.params;
      find({ key: "etat_d_avancement", value: avancement })
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(err));
    });

    // Recherche par ville
    investissementRouter.get("/ville/:ville", (req, res) => {
      const { ville } = req.params;
      find({ key: "ville", value: ville })
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(err));
    });

    // Recherche par id
    investissementRouter.get("/:id", (req, res) => {
      const { id } = req.params;
      find({ key: "id", value: id })
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(err));
    });
  }

  init() {
    this.routes();
    return investissementRouter;
  }
}
//

// Export
module.exports = InvestissementRouterClass;
//
