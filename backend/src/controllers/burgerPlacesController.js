const pool = require("../config/db");

module.exports = {
  async allPlaces(req, res) {
    try {
      const response = await pool.query("SELECT * FROM restaurants");
      const data = response.rows;
      return res.status(200).json(data);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Server error" });
    }
  },
  async singlePlace(req, res) {
    try {
      const { id } = req.params;
      const place = await pool.query(
        "SELECT id, address, name, opening_hours, menu FROM restaurants WHERE id = $1",
        [id]
      );

      const comments = await pool.query(
        "SELECT * FROM comments WHERE restaurant_id = $1",
        [id]
      );

      if (place.rows[0] && comments.rows) {
        return res.status(200).json([place.rows[0], comments.rows]);
      }

      throw error;
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ message: "Bad request." });
    }
  },
};
