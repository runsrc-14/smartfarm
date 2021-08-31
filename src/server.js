const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const weatherRoutes = require("./routes/weather.routes");
const path = __dirname + '/../public';

const db = require("./models");
const initRoutes = require("./routes/csv.routes");
app.use(express.static(path));

global.__basedir = __dirname + "/";
// var corsOptions = {
//   origin: "https://api-rmuti.herokuapp.com/"
// };
// app.use(cors(corsOptions));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://rmuti-surin-smartfarm.herokuapp.com/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();
const Role = db.role;

app.get('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
});
//route
app.get('/', (req, res) => res.sendFile(path + "index.html"));


//routes
weatherRoutes(app);
initRoutes(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require("./routes/turorial.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.\n`);
});
// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });

//   Role.create({
//     id: 2,
//     name: "moderator"
//   });

//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }