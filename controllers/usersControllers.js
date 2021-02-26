const User = require('../models/User');

module.exports = {
  getAll: async (req, res) => {
    let { limit } = req.query;
    limit = parseInt(limit);
    
    try {
      let dbResult = await User.find({}).sort({date: "desc"});
      // if there is a query parameter limit the fight results are limited
      if(limit) dbResult = await User.find({}).sort({name: "desc"}).limit(limit);
      res.json({
        code: 200,
        operation: 'success',
        description: `fetched ${dbResult.length} User`,
        data: dbResult,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  create: async (req, res) => {
    const { name, password, email } = req.body;
    try {
      await User.create({
        name,
        password,
        email,
      });
      res.json({
        code: 200,
        message: "User has been created successfully",
      });
    } catch (error) {
      console.log(Error(e));
      res.status(500).json({
        code: 500,
        message: e.message,
      });
    }
  },
};