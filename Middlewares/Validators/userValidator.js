const { check, validationResult } = require('express-validator');

const validateRegisterUser = [
   check('email', 'Your email is not valid').not().isEmpty(),
   check('password', 'Your password must be at least 5 characters').not().isEmpty(),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(422).json(errors.array());
      } else {
         next();
      }

   },
];

module.exports = {
   validateRegisterUser
}