const express = require("express");
const cors = require("cors");

const app = express();

require('dotenv').config();
const path = require('path');

var corsOptions = {
  origin: ["http://localhost:4200"],
};

app.use(cors(corsOptions));


app.use("/Images",express.static("./Images"));

app.use(express.static(path.join(__dirname,"static")));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();



app.get("/",(req,res)=>{
  res.json({message:'Welcome'});
});


require('./app/routes/user.routes')(app);



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
