const pool = require("../config/db");

module.exports = {
  async createComment(req, res) {
    try {
      const { id } = req.params;
      const { author, rating, comment } = req.body;

      await pool.query(
        "INSERT INTO comments (restaurant_id, author, rating, comment) VALUES ($1, $2, $3, $4)",
        [id, author, rating, comment]
      );

      return res.status(201).json("Added successfully.");
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ message: "Bad request." });
    }
  },
};
