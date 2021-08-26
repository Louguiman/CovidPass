exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("Vue utilisateur.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Vue Admin ou proprietaire .");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Vue entreprise.");
  };