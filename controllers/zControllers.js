//const Z = require('../models/Z');

module.exports = {
  getAll: async (req, res) => {
    
    try {
      res.send("ZZZ")
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};