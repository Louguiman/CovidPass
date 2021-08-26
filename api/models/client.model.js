module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("clients", {
      status: {
        type: Sequelize.BOOLEAN
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      idRegistry:{
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },
      job: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      isAllergic: {
        type: Sequelize.BOOLEAN
      },
      prevAffliction: {
        type: Sequelize.BOOLEAN
      },
      isVaccinated: {
          type: Sequelize.BOOLEAN
      },
      country: {
          type: Sequelize.STRING
      }
    });
  
    return Client;
  };

