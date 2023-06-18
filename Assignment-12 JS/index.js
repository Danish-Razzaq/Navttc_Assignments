const marks = [80, 850, 50];
let sum = 0;

function calculateGrade() {
  for (let mark of marks) {
    sum += mark;
  }
  let average = sum / marks.length;
  console.log("Your Average =", average);

  // find grade
  if (average < 60) return "Your Grade is F";
  if (average < 70) return "Your Grade is = D";
  if (average < 80) return "Your Grade is = C";
  if (average < 90) return "Your Grade is = B";
  return "Your Grade is = A";
}


const calculatePercentage = () => {
  let scores = 0;
  for (let score of marks) {
    scores += score;
  }
  let average = scores / marks.length;
  let percentage = (average / 500) * 100;
  console.log("Your Percentage =", percentage);
};

console.log(calculateGrade());
calculatePercentage();
