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
  routes() {
    // Recherche par avancement
    investissementRouter.get("/avancement/:avancement", (req, res) => {
      const { avancement } = req.params;
      find({ etat_d_avancement: avancement })
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(res, undefined, err));
    });

    // Recherche par ville
    investissementRouter.get("/ville/:ville", (req, res) => {
      const { ville } = req.params;
      find({ ville })
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(res, undefined, err));
    });

    // Recherche par id
    investissementRouter.get("/:id", (req, res) => {
      const { id } = req.params;
      find({ id })
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(res, undefined, err));
    });

    // Retourne tous les investissements
    investissementRouter.get("/", (req, res) => {
      find()
        .then(data => sendApiSuccessResponse(res, data))
        .catch(err => sendApiErrorResponse(res, undefined, err));
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
