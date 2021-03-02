const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), (req, res) => {

    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });


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


  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {

      res.json({});
    } else {

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
      price: req.body.price,
      imgFileName: req.body.imgFileName,
      UserId: req.user.id
    })
      .then(function (dbCloset) {
        res.json(dbCloset)

      }).catch(function (err) {
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
        where: {
          id
        }
      }

    )
      .then(function (dbCloset) {
        res.json(dbCloset)
        console.log(dbCloset)
      }).catch(function (err) {
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
      .then(function (dbItem) {
        res.send(200)

      }).catch(function (err) {
        console.log(err)
      })

  });





};
