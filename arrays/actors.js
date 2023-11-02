let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Find member name by using ID
function findMemberById(academyMembers, memberID) {
  // Loop through the array "academyMembers" using for of loop
  // then put the index data from this loop into variable "academyIndex"

  for (const academyIndex of academyMembers) {
    // search through the index ("academyIndex") specifically by ".memID"
    // academyIndex.memID
    // if the "memberID" equals the number "187" then
    // return the value "name" into the function

    if (academyIndex.memID == memberID) {
      return academyIndex.name;
    }
  }
}

// log the function using the params selected
// console.log(findMemberById(academyMembers, 187));

function findMembersWith3Films(academyMembers, filmCount) {
  threeOrMore = [];

  for (const academyIndex of academyMembers) {
    if (academyIndex.films.length >= filmCount) {
      threeOrMore.push(academyIndex.name);
    }
  }
  return threeOrMore;
}
// console.log(findMembersWith3Films(academyMembers, 3));

function findBob(academyMembers, findMember) {
  let bob = [];
  for (const academyIndex of academyMembers) {
    if (academyIndex.name.includes(findMember)) {
      bob.push(academyIndex.name);
    }
  }
  return bob;
}

// console.log(findBob(academyMembers, "Bob"));

function findMembersInAFilms(academyMembers, searchCriteria) {
  let AFilmMembers = [];
  for (const academyIndex of academyMembers) {
    for (const academyIndexFilms of academyIndex.films)
      if (academyIndexFilms.indexOf(searchCriteria) == 0) {
        AFilmMembers.push(academyIndex.name);
      }
  }
  return AFilmMembers;
}
console.log(findMembersInAFilms(academyMembers, "A"));
