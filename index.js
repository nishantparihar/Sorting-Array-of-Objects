// run `node index.js` in the terminal
let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

function sortStudents(students) {
  students.sort((student1, student2) => {
    const totalMarks1 = student1.chemistry + student1.biology;
    const totalMarks2 = student2.chemistry + student2.biology;

    if (totalMarks1 !== totalMarks2) {
      return totalMarks2 - totalMarks1;
    }

    if (student1.biology !== student2.biology) {
      return student2.biology - student1.biology;
    }

    if (student1.dob !== student2.dob) {
      const date1 = new Date(student1.dob);
      const date2 = new Date(student2.dob);

      return date1 - date2;
    }

    return 0;
  });
}

sortStudents(testCase1);
sortStudents(testCase2);

const result1 = testCase1.map((student) => `${student.name}`);

const result2 = testCase2.map((student) => `${student.name}`);
console.log(result1);
console.log(result2);
