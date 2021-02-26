const Massage = require('../models/Message');

module.exports = {
  getAll: async (req, res) => {
    
    try {
      res.send("All Messages")
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getById:  async (req, res) => {
    
    try {
      res.send("Massage By ID")
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};