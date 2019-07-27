// Imports
//// NodeJS
const { Router } = require("express");
//// Interne
const { sendApiSuccessResponse } = require("../../services");
//

//Initiation routeur
const investissementRouter = Router();

// Définition des routes
class InvestissementRouterClass {
  constructor() {}

  routes() {
    // Remplissage de la BDD
    investissementRouter.post("/init", (req, res) => {
      sendApiSuccessResponse(res, { message: "init" });
    });

    // Recherche par avancement
    investissementRouter.get("/avancement/:avancement", (req, res) => {
      const { avancement } = req.params;
      console.log(avancement);
      sendApiSuccessResponse(res, { avancement });
    });

    // Recherche par ville
    investissementRouter.get("/ville/:ville", (req, res) => {
      const { ville } = req.params;
      console.log(ville);
      sendApiSuccessResponse(res, { ville });
    });

    // Recherche par id
    investissementRouter.get("/:id", (req, res) => {
      const { id } = req.params;
      console.log(id);
      sendApiSuccessResponse(res, { id });
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
