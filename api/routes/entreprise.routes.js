module.exports = app => {    
    const entreprises = require("../controllers/entreprise.controller");
  
    var router = require("express").Router();
  
    // Create a new entreprise
    router.post("/", entreprises.create);
  
    // Retrieve all entreprises data
    router.get("/", entreprises.findAll);
  
    
    // Retrieve a single entreprise with id
    router.get("/:id", entreprises.findOne);
  
    // Update a Entreprise with id
    router.put("/:id", entreprises.update);
  
    // Delete a Entreprise with id
    router.delete("/:id", entreprises.delete);
  
    // Delete all Entreprises
    router.delete("/", entreprises.deleteAll);
  
    app.use('/api/entreprises', router);
  };