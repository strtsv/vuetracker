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
      const { songId } = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      if (bookmark) {
        return res.status(400).send({
          error: "you already have this case as bookmark",
        });
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId,
      });
      res.send(newBookmark);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "an error has occured trying to create the bookmark",
      });
    }
  },
};
