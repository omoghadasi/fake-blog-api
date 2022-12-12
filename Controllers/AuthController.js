const Controller = require(`${config.path.controllers}/Controller`);

module.exports = new (class AuthController extends Controller {
   login() { }

   register(req, res) {
      this.model
         .User({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
         })
         .save((err) => {
            if (err) {
               return res.json(err);
            }
            res.redirect("/panel");
         });
   }

})();
