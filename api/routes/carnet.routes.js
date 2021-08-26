module.exports = app => {    
    const carnets = require("../controllers/carnet.controller");
  
    var router = require("express").Router();
  
    // Create a new carnets
    router.post("/", carnets.create);
  
    // Retrieve all carnets
    router.get("/", carnets.findAll);
  
    
    // Retrieve a single Client with id
    router.get("/:id", carnets.findOne);
  
    // Update a Client with id
    router.put("/:id", carnets.update);
  
    // Delete a Client with id
    router.delete("/:id", carnets.delete);
  
    // Delete all clients
    router.delete("/", carnets.deleteAll);
  
    app.use('/api/carnets', router);
  };