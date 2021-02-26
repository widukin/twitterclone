const User = require('../models/User');

module.exports = {
  getAll: async (req, res) => {
    try {
      let dbResult = await User.find({}).sort({name: "asc"});
      if(!dbResult.length) throw {
        status: 404,
        operation: "not found",
        message: ` Users were not found`,
      };
      res.json({
        code: 200,
        operation: 'success',
        description: `fetched ${dbResult.length} Users`,
        data: dbResult,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      let dbResult = await User.find({ _id: id });
      if(!dbResult.length) throw {
        status: 404,
        operation: "not found",
        message: ` User with the ID ${id} was not found`,
      };
      res.json({
        code: 200,
        operation: 'success',
        description: `fetch User with the ID ${id}`,
        data: dbResult,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (error) {
      console.log(Error(error));
      res.status(500).json({
        code: 500,
        message: error.message,
      });
    }
  },
};