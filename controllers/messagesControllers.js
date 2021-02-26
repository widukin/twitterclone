const Message = require("../models/Message");
const User = require("../models/User");
// const Service = require("../services/filterMessageByUser");

module.exports = {
  getAll: async (req, res) => {
    const { date, user, text } = req.query;

    let object;
    let userForPost;

    if (date) {
      object = { date: date };
    } else if (user) {
      const userData = await User.findOne({ name: { $regex: user } })
        .populate("messages")
        .exec((err, result) => console.log(result?.messages)); // this console logs what i want
      console.log(userData); // this is undefined
    } else if (text) {
      object = { text: { $regex: text } };
    } else {
      object = {};
    }

    try {
      const messages = await Message.find(object);
      res.json(messages);
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const message = await Message.findById(id);
      res.json(message);
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};
