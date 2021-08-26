const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

//access protégé et non protégé avec l'identification JWT 
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Point d'accès création d'utilisateur
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  //Point d'accès connexion
  app.post("/api/auth/signin", controller.signin);
};