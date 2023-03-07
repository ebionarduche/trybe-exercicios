const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswares = (rightAsnwer, studentAsnwers) => {
  rightAsnwer === studentAsnwers ? 1 : studentAsnwers === 'N.A' ? 0 : -0.5;
}

const calculeteScore = (rightAsnwer, studentAsnwers) => {
  score = rightAsnwer.reduce((acc, cur, index) => {
    
  })
}

