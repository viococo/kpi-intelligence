// Imports
//// NodeJS
const { Router } = require("express");
//// Interne
const { sendApiSuccessResponse } = require("../../services");
//

//Initiation routeur
const homeRouter = Router();

// Définition des routes
class HomeRouterClass {
  constructor() {}

  routes() {
    homeRouter.get("/", (req, res) => {
      sendApiSuccessResponse(res, { message: "Bienvenue sur l'API" });
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
