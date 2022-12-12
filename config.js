const path = require("path");
module.exports = {
   port: 3000,
   dbUrl: "mongodb://localhost:27017/fakeblogapi",
   path: {
      controllers: path.resolve("./Controllers"),
      models: path.resolve("./Models"),
      routes: path.resolve("./Routes"),
   },
};