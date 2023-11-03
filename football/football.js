let teams = [
  {
    code: "DAL",
    name: "Dallas Cowboys",
    plays: "Arlington, TX",
    picture:
      "https://media.istockphoto.com/id/1134301581/vector/trash-can-mascot-with-thumbs-up.jpg?s=612x612&w=0&k=20&c=tQgOoXR41AHofd8ibFdOP0oSrVq8eUJkBuJ_w_EqwYI=",
    alt: "Dallas Cowboy Logo",
  },
  {
    code: "DEN",
    name: "Denver Broncos",
    plays: "Denver, CO",
    picture:
      "https://i.bleacherreport.net/images/team_logos/328x328/denver_broncos.png?canvas=492,328",
    alt: "Denver Broncos Logo",
  },
  {
    code: "HOU",
    name: "Houston Texans",
    plays: "Houston, TX",
    picture: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/HOU",
    alt: "Houston Texans Logo",
  },
  {
    code: "KAN",
    name: "Kansas City Chiefs",
    plays: "Kansas City, MO",
    picture:
      "https://yt3.googleusercontent.com/scFOA5OCEcZURmSKtsFgPq2kQ16a9kmX00m8w2EGT6LDBD2k7ySayWMVjRLIPQ2Y5qhANPw9=s900-c-k-c0x00ffffff-no-rj",
    alt: "Kansas City Cheifs Logo",
  },
  {
    code: "PAT",
    name: "New England Patriots",
    plays: "Boston, Massachussetts",
    picture:
      "https://static.clubs.nfl.com/image/private/f_auto/patriots/ftuml6gmogyahtnd2neb",
    alt: "New England Patriots Logo",
  },
];

const footballTeams = document.getElementById("footballTeams");
let displayTeamOutput = document.getElementById("displayTeamOutput");
const teamImage = document.getElementById("teamImage");

function listFootballTeams() {
  for (const team of teams) {
    let option = new Option(team.name, team.code);
    footballTeams.appendChild(option);
  }
}

function displayTeamOnClick() {
  // remove image on click

  for (const team of teams) {
    if (footballTeams.value == team.code) {
      displayTeamOutput.innerText = `You selected the ${team.name} (${footballTeams.value}) who play in ${team.plays}`;
      teamImage.src = team.picture;
    }
  }
  if (footballTeams.value == "select") {
    alert("No team was selected");
    return footballTeams.value;
  }
}

footballTeams.onchange = function () {
  if (footballTeams.value == "select") {
    teamImage.src = "";
    displayTeamOutput.innerText = "";
  }
};

listFootballTeams();
