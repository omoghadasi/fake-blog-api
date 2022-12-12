const User = require(`${config.path.models}/User`)

module.exports = class Controller {
   constructor() {
      this.model = { User }
   }
}