
const db = require("../models")
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { decodeBase64 } = require("bcryptjs");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  app.get("/closet", (req, res) => {
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("closet");
  });

  app.get("/cart", (req, res) => {

    if (!req.user) {
      res.redirect("/login");
    }
    db.Closet.findAll(
      {raw: true}
      )
    .then(dbCloset => {
      // console.log(dbCloset)
      res.render("cart", {
        allItems: dbCloset
      })

    })
   
  });


  app.get("/shop", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
    }
    res.render("shop");
  });

  app.get("/item/:id", (req, res) => {
    console.log(req.params)
    if (!req.user) {
      return res.redirect("/login");
    }
    db.Closet.findOne(
     
      {   

      where:{
        id: req.params.id
      }
    }).then(dbItem =>
      { console.log(dbItem.dataValues)
      
      res.render("item", dbItem.dataValues)
    }
      );
        
 
  });




  // Here we've add our isAuthenticated middleware to this route.

  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members", {
      user: req.user
    });
  });
};
