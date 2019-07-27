// Imports
//// NodeJS
const { Router } = require("express");
//// Interne
const {
  sendApiSuccessResponse,
  sendApiErrorResponse
} = require("../../services/response.service");
const { init, isInit } = require("./home.controller");
//

//Initiation routeur
const homeRouter = Router();

// Définition des routes
class HomeRouterClass {
  routes() {
    // Remplissage de la BDD
    homeRouter.get("/init", (req, res) => {
      isInit().then(isInit => {
        if (isInit) sendApiErrorResponse(res, "La BDD est déjà remplit");
        init().then(() =>
          sendApiSuccessResponse(res, "BDD remplit avec succes")
        );
      });
    });

    // Home
    homeRouter.get("/", (req, res) => {
      sendApiSuccessResponse(res, "Bienvenue sur l'API");
    });
  }

  init() {
    this.routes();
    return homeRouter;
  }
}
//

// Export
module.exports = HomeRouterClass;
//
