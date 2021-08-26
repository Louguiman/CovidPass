const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors(corsOptions));

const db = require("./models");
const Role = db.role;

db.sequelize.sync();
  
  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }
  
// routes  
app.get('/', function (req, res) {
    res.send({
        message: 'Default route test '
    });
});

require('./routes/auth.route')(app);
require('./routes/user.routes')(app);
require("./routes/client.routes")(app);
require("./routes/carnet.routes")(app);
require("./routes/entreprise.routes")(app);





app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});