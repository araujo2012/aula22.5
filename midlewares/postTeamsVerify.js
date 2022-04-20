const postTeamsVerify = (req, res, next) => {
  const { name, initials, country } = req.body;

  if (!name) return res.status(400).json("Name not defined");
  if (!initials) return res.status(400).json("Initials not defined");
  if (!country) return res.status(400).json("Country not defined");

  if (name.length <= 5) {
    return res.status(400).json("Name must contain more than 5 letters");
  }
  if (initials.length > 3) {
    return res.status(400).json("Initials must not have more than 3 letters");
  }
  if (initials !== initials.toUpperCase()) {
    return res.status(400).json("Initials must be all uppercase");
  }
  if (country.length <= 3) {
    return res.status(400).json("Country must contain more than 3 letters");
  }

  next();
};

module.exports = postTeamsVerify;
