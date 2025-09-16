const usercontroller = require("../controllers/user.controller");





const express = require("express");


const router = express.Router();


module.exports = function(app){
    app.use(function(req,res,next){
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  router.post("/createuser",usercontroller.upload,usercontroller.createuser);

  router.get("/GetAllUsers",usercontroller.GetAllUsers)




  app.use("/api/users",router);

};