module.exports = (sequelize, Sequelize) => {
    const Identity = sequelize.define("identities", {
      idType: {
        type: Sequelize.STRING
      },
      idUrl: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
    });
      return Identity;
  };