let janeScores = [92, 98, 84, 76, 89, 99, 100];
let johnScores = [82, 98, 94, 88, 92, 100, 100];

function calculateAverage(studentAvg) {
  sum = 0;
  for (index = 0; index < studentAvg.length; index++) {
    sum += studentAvg[index] / studentAvg.length;
  }
  console.log("Student's average is: " + Math.round(sum));

  return sum;
}

calculateAverage(janeScores);
