const { Bookmark, Song } = require("../models");
const _ = require("lodash");

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.query;
      const where = {
        userId: userId,
      };
      if (songId) {
        where.songId = songId;
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song,
          },
        ],
      })
        .map((bookmark) => bookmark.toJSON())
        .map((bookmark) => _.extend({}, bookmark.Song, bookmark));
      res.send(bookmarks);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to fetch the bookmark",
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      res.send(userId);
    }
  },
};
