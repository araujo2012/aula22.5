const fs = require("fs");

const getTeamsVerify = (req, res, next) => {
  const team = fs.readFileSync("./teams.json", "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });

  const newTeam = JSON.parse(team);

  if (newTeam.length === 0) return res.status(200).json({ teams: [] });

  req.team = team;

  next();
};

module.exports = getTeamsVerify;
