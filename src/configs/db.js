const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ketan:ketan123@cluster0.pvb7r.mongodb.net/validation?retryWrites=true&w=majority"
  );
};
