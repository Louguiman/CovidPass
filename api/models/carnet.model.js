module.exports = (sequelize, Sequelize) => {
    const Carnet = sequelize.define("carnets", {

      status: {
        type: Sequelize.BOOLEAN
      },
      firstDate: {
        type: Sequelize.DATE
      },
      vaccine1: {
        type: Sequelize.STRING
      },
      lotNo1: {
        type: Sequelize.INTEGER
      },
      expDate1: {
        type: Sequelize.DATE
      },
      vaccinationCenter1: {
        type: Sequelize.STRING
      },
      secondDate: {
        type: Sequelize.DATE
      },
      vaccine2:{
        type: Sequelize.STRING
      },
      lotNo2: {
        type: Sequelize.INTEGER
      },
      ExpDate2: {
        type: Sequelize.DATE
      },
      vaccinationcenter2: {
        type: Sequelize.STRING
      },
      otherDate: {
        type: Sequelize.DATE
      },
      vaccine3: {
        type: Sequelize.STRING
      },
      lotNo3: {
        type: Sequelize.INTEGER
      },
      ExpDate3: {
        type: Sequelize.DATE
      },
      vaccinationcenter3: {
        type: Sequelize.STRING
      },
      countryOfVaccination: {
        type: Sequelize.STRING
      }
    });
  
    return Carnet;
  };