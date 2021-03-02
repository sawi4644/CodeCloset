// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });    

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
 

  app.post("/cart", (req, res) => {

     db.Closet.create({
       item: req.body.item,
       color: req.body.color,
       size: req.body.size,
       price:req.body.price,
       imgFileName:req.body.imgFileName,
       UserId: req.user.id
     })
    .then(function(dbCloset){
      res.json(dbCloset)
   
    }).catch(function(err){
      console.log(err)
    })

  });

  app.put("/item/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    const id = req.params.id
    console.log(id)
     db.Closet.update(req.body,
       {
         where:{
             id
         }
       }
 
     )
    .then(function(dbCloset){
      res.json(dbCloset)
      console.log(dbCloset)
    }).catch(function(err){
      console.log(err)
    })

  });

 
  app.delete("/cart/:id", (req, res) => {
    console.log(req.params.id)
     db.Closet.destroy({
      where: {
        id: req.params.id
      }
     })
    .then(function(dbItem){
      res.send(200)

    }).catch(function(err){
      console.log(err)
    })

  });





};
