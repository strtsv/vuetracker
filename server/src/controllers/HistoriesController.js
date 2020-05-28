const { History } = require("../models");
const _ = require("lodash");

module.exports = {
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.body;
      const history = await History.create({
        SongId: songId,
        UserId: userId,
      });
      res.send(history);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "an error has occured trying to create the history object",
      });
    }
  },
};
