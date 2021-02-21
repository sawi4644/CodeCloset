// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

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
    // if (req.user) {
    //   res.redirect("/pickStyle");
    // }
    res.render("cart");
  });
  // Here we've add our isAuthenticated middleware to this route.

  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members", {
      user: req.user
    });
  });
};
