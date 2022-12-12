const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match:
         /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
   },
   password: {
      type: String,
      required: true,
   },
});
userSchema.plugin(timestamps);
userSchema.pre('save', function (next) {
   bcrypt.hash(this.password, 10, (err, hash) => {
      this.password = hash
      next()
   });
})

module.exports = mongoose.model("User", userSchema);
