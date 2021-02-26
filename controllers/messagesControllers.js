const Message = require("../models/Message");
const User = require("../models/User");

module.exports = {
  getAll: async (req, res) => {
    const { date, user, text } = req.query;

    let object;
    let userForPost;

    if (date) {
      object = { date: date };
    } else if (user) {
      userForPost = await User.find({ name: { $regex: user } })
        .populate("messages")
        .exec((err, messages) => messages[0]?.messages);
    } else if (text) {
      object = { text: { $regex: text } };
    } else {
      object = {};
    }

    try {
      const messages = await Message.find();
      res.json(userForPost);
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
