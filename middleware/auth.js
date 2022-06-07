module.exports = {
  ensureAuth: (req, res, next) => {
    req.isAuthenticated() ? next() : res.redirect("/");
  },
  ensureGuest: function (req, res, next) {
    req.isAuthenticated() ? res.redirect("/main") : next();
  },
};
