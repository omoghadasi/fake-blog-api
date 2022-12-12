const { check, validationResult } = require('express-validator');

const validateRegisterUser = [
   check('email')
      .trim()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage('آدرس ایمیل معتبر نیست.')
      .bail(),
   check('password')
      .trim()
      .not()
      .isEmpty()
      .withMessage('رمز عبور معتبر نیست')
      .bail(),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
         return res.status(422).json({ errors: errors.array() });
      next();
   },
];

module.exports = {
   validateRegisterUser
}