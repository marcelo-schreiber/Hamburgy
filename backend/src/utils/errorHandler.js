const errorHandler = (req, res) => {
  return res.status(404).send({ message: "URL not found" });
};

module.exports = errorHandler;
