const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    date: {type: Date, required: true, default: Date.now()},
    text: {type: String, required: true},
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
});

module.exports = mongoose.model("Message", MessageSchema);