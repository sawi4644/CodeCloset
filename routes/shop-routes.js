// Requiring our models and passport as we've configured it
const db = require("../models");


module.exports = function(app) {

  app.get("/api/shop",  (req, res) => {
   
    console.log(req.body)
 
  });

//    app.post()





};
