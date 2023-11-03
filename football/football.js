let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
  {
    code: "PAT",
    name: "New England Patriots",
    plays: "Boston, Massachussetts",
  },
];

const footballTeams = document.getElementById("footballTeams");

function listFootballTeams() {
  for (const team of teams) {
    let option = new Option(team.name, team.code);
    footballTeams.appendChild(option);
  }
}

function displayTeamOnClick() {
  let displayTeamOutput = document.getElementById("displayTeamOutput");

  if (footballTeams.value == "select") {
    alert("No team was selected");
    return footballTeams.value;
  }
  displayTeamOutput.innerText = footballTeams.value;
}

listFootballTeams();
