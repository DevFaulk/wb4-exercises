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

function findMembersWith3Films(academyMembers, filmCount) {
  threeOrMore = [];

  for (const academyIndex of academyMembers) {
    if (academyIndex.films.length >= filmCount) {
      threeOrMore.push(academyIndex.name);
    }
  }
  return threeOrMore;
}

// console.log(findMemberById(academyMembers, 187));

console.log(findMembersWith3Films(academyMembers, 3));
