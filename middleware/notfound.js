const notFound = (req, res) =>
  res.status(404).send("does not exist your request");

module.exports = notFound;
