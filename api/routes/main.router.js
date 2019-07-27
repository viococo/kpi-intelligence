// Imports
//// NodeJS
const { Router } = require("express");
//// Routers
const HomeRouterClass = require("./home/home.routes");
const InvestissementRouterClass = require("./investissement/investissement.routes");
//

// Définitions des routes
//// Parent
const mainRouter = Router();
//// Enfants
const homeRouter = new HomeRouterClass();
const investissementRouter = new InvestissementRouterClass();
//

// Configuration des routes
mainRouter.use("/", homeRouter.init());
mainRouter.use("/investissement", investissementRouter.init());
//

// Export
module.exports = { mainRouter };
//
