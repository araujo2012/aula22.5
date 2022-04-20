const fs = require("fs");

const express = require("express");
const postTeamsVerify = require("./midlewares/postTeamsVerify");
const getTeamsVerify = require("./midlewares/getTeamsVerify");

const app = express();

app.use(express.json());

app.get("/teams", getTeamsVerify, (req, res) => {
  const team = req.team;
  return res.status(200).json(JSON.parse(team));
});

app.post("/teams", postTeamsVerify, (req, res) => {
  const { name, initials, country, league } = req.body;
  const message = { name, initials, country, league };
  const team = fs.readFileSync("./teams.json", "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  let newTeam = JSON.parse(team);
  newTeam = [...newTeam, message];
  fs.writeFile("./teams.json", JSON.stringify(newTeam), (err) => {
    if (err) {
      console.log(err);
    }
  });
  return res.status(200).json(message);
});

app.listen(3333, () => {
  console.log("Conectou na porta 3333");
});
