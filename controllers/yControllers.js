//const Y = require('../models/Y');

module.exports = {
  getAll: async (req, res) => {
    
    try {
      res.send("YYY")
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};