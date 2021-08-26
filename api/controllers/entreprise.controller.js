const db = require("../models");
const Entreprise = db.entreprises;

// Create and Save a new Entreprise
exports.create = (req, res) => {
  // if (!req.body.name) {
  //     res.status(400).send({
  //         message: "Le champs ne doit pas être vide!"
  //     });
  //     return;
  // }

  console.log(req.body);

  const entreprise = {
    status: req.body.status,
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  };
  console.log(entreprise);

  // Save Carnet in the database
  Entreprise.create(entreprise)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la creation de entreprise."
      });
    });


};

// Retrieve all Entreprises from the database.
exports.findAll = (req, res) => {
  Carnet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la recherche des entreprises."
      });
    });

};

// Find a single Entreprise with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Carnet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la recherche de l'entreprise avec id: " + id
      });
    });
};

// Update a Entreprise by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Entreprise.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entreprise a été modifié avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour l'entreprise' avec id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la mis à jour de l'entreprise avec id=" + id
      });
    });
};

// Delete a Entreprise with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Entreprise.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "entreprise supprimé!"
        });
      } else {
        res.send({
          message: `Impossible de supprimer le entreprise avec id=${id}. L'entreprise n'a été trouvé!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer l'entreprise'avec id=" + id
      });
    });

};

// Delete all entreprise data from the database.
exports.deleteAll = (req, res) => {

  Entreprise.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} entreprises ont été supprimeés avec suucès!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la suppression des données entreprise."
      });
    });
};



