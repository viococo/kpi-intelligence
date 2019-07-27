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
    // Recherche par id
    investissementRouter.get("/:id", (req, res) => {
      const { id } = req.params;
      find({ _id: id })
        .then(data => sendApiSuccessResponse(res, null, data[0]))
        .catch(err => sendApiErrorResponse(res, undefined, err));
    });

    // Retourne tous les investissements
    investissementRouter.get("/", (req, res) => {
      const { avancement, ville } = req.query;
      const query = {};
      if (avancement.trim().length) query.etat_d_avancement = avancement.trim();
      if (ville.trim().length) query.ville = ville.trim();
      find(query)
        .then(data => sendApiSuccessResponse(res, null, data))
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
