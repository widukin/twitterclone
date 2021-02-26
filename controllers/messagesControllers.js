const Message = require("../models/Message");
const User = require("../models/User");

module.exports = {
  getAll: async (req, res) => {
    const { date, user, text } = req.query;

    let object;
    let messagesByUser;

    if (date) {
      object = {};
    } else if (user) {
      const userData = await User.findOne({ name: { $regex: user } });
      messagesByUser = await Message.find({ _id: { $in: userData.messages } });
    } else if (text) {
      object = { text: { $regex: text } };
    } else {
      object = {};
    }

    try {
      const messages =
        messagesByUser || (await Message.find(object).sort({ date: date }));
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
