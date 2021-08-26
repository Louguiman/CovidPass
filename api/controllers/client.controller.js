const db = require("../models");
const Client = db.carnets;
const Op = db.Sequelize.Op;

// Create and Save a new Client
exports.create = (req, res) => {
  // if (!req.body.name) {
  //     res.status(400).send({
  //         message: "Le champs ne doit pas être vide!"
  //     });
  //     return;
  // }
  data = req.body;

  const client = {
    status: data.status,
    name: data.name,
    surname: data.surname,
    phoneNumber: data.phoneNumber,
    idRegistry: data.idRegistry,
    dob: data.dob,
    age: data.age,
    job: data.job,
    address: data.address,
    isAllergic: data.isAllergic,
    prevAffliction: data.preAffliction,
    isVacccinated: data.isVaccinated ? data.isVaccinated : false,
    country: data.country,
  };

  // Save Client in the database
  Client.create(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la creation du client."
      });
    });


};

// Retrieve all carnets from the database.
exports.findAll = (req, res) => {
  Client.findAll()
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

// Find a single client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Client.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la recherche du client avec id: " + id
      });
    });
};

// Update a client info by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Client.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client a été modifié avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour le client avec id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la mis à jour du client avec id=" + id
      });
    });
};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Client.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client supprimé!"
        });
      } else {
        res.send({
          message: `Impossible de supprimer le client avec id=${id}. Le client n'a été trouvé!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer le client avec id=" + id
      });
    });

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Client.destroy({
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

// Find all carnets by name Tutorials
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Client.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la recherche."
      });
    });
};