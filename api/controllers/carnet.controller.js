const db = require("../models");
const Carnet = db.carnets;
const Op = db.Sequelize.Op;

// Create and Save a new Carnet
exports.create = (req, res) => {
  // if (!req.body.testNo) {
    //     res.status(400).send({
    //         message: "Le champs ne doit pas être vide!"
    //     });
    //     return;
    // }
    data = req.body;
    console.log(req.body);

    const carnet = {
        status: data.status,
        firstDate: data.firstDate,
        vaccine1: data.vaccine1,
        lotNo1: data.lotNo1,
        expDate1: data.expDate1,
        vaccinationCenter1: data.vaccinationCenter1,
        secondDate: data.secondDate,
        vaccine2: data.vaccine2,
        lotNo2: data.lotNo2,
        expDate2: data.expDate2,
        vaccinationCenter2: data.vaccinationCenter2,
        otherDate: data.otherDate,
        vaccine3: data.vaccine3,
        lotNo13: data.lotNo3,
        expDate3: data.expDate3,
        vaccinationCenter3: data.vaccinationCenter3,
        countryOfVaccination: data.country 
      };
    console.log(carnet);

    // Save Carnet in the database
    Carnet.create(carnet)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erreur lors de la creation du carnet."
            });
        });


};

// Retrieve all Carnets from the database.
exports.findAll = (req, res) => {
    Carnet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la recherche des carnets."
      });
    });
  
};

// Find a single Carnet with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Carnet.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur lors de la recherche du carnet avec id: " + id
        });
      });
};

// Update a Carnet by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Carnet.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Carnet a été modifié avec succès."
          });
        } else {
          res.send({
            message: `Impossible de mettre à jour le carnet avec id=${id}!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur lors de la mis à jour du carnet avec id=" + id
        });
      });
};

// Delete a Carnet with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Carnet.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "carnet supprimé!"
          });
        } else {
          res.send({
            message: `Impossible de supprimer le carnet avec id=${id}. Le carnet n'a été trouvé!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le carnet avec id=" + id
        });
      });
  
};

// Delete all Carnet from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Carnet.destroy({
          where: {},
          truncate: false
        })
          .then(nums => {
            res.send({ message: `${nums} carnets ont été supprimeés avec suucès!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Erreur lors de la suppression des carnets."
            });
          });
};
}
