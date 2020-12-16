const routes = require("express").Router();
const burguerPlacesController = require("./controllers/burgerPlacesController");
const createCommentController = require("./controllers/createCommentController");

// All burger places to use in map
routes.get("/burguer-places", burguerPlacesController.allPlaces);

// Single burger places to use in details
routes.get("/burguer-places/:id", burguerPlacesController.singlePlace);

// Create comments on a burguer place
routes.post("/create-comment/:id", createCommentController.createComment);

module.exports = routes;
