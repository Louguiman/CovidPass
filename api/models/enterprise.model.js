module.exports = (sequelize, Sequelize) => {
    const Entreprise = sequelize.define("entreprises", {
      status: {
        type: Sequelize.BOOLEAN
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
  
    return Entreprise;
  };