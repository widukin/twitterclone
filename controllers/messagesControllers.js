const Message = require("../models/Message");

module.exports = {
  getAll: async (req, res) => {
    const { date, user, text } = req.query;

    let object;

    if (date) {
      object = { date: date };
    } else if (user) {
      console.log("I am not working..");
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
