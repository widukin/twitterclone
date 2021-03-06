const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    profile_img_url: {type: String},
    messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }],
});

module.exports = mongoose.model("User", UserSchema);