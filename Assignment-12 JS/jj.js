let scores = [202, 20, 200];

const calculateGrade = () => {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  let average = sum / scores.length;
  let percentage = (average / 500) * 100;
  return percentage;
};

console.log(calculateGrade());