"use strict";

// 1. Simple function
// Function that takes a name as parameter and returns a string

function greet(name) {
  return `Hello ${name}`;
}
const greeting = greet("Kadibia");
console.log(greeting);

// 2. Array basics: Function that takes an array of numbers as input and returns the sum of the numbers.

const array = [2, 6, 7, 9, 4, 6];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray(array));

// 3. Object creation: Function that returns a string with car properties from an object created

let car = {
  make: "Lexus",
  model: 450,
  year: 2023,
};

function getCarInfo(car) {
  return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;
}
const carInfo = getCarInfo(car);
console.log(carInfo);

// 4. Loop through array: function that loops through an array and prints its elements

let arr = [4, 7, 5, 8, 7, 5, 1];
function arrValue(arr) {
  for (let i = 0; i < arr.length; i++);
  return arr;
}
console.log(arrValue(arr));

// 5. Conditional statement: Function to check if a number is even or odd

function checkNumber(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkNumber(62));

// 6. Array of obect: Function that prints the name of students

const students = [
  {
    name: "Chima Grace",
    age: 22,
    grade: "A",
  },
  {
    name: "James Gabriel",
    age: 25,
    grade: "A",
  },
  {
    name: "Chioma Okoro",
    age: 21,
    grade: "A",
  },
];

function printStudentNames(students) {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
  }
}

printStudentNames(students);

// 7. Write a function filterEvenNumbers(arr) that takes an array of numbers and returns a new array with only the even numbers.

const arr3 = [2, 6, 7, 5, 3, 10, 17, 20];
let newArr = [];

function filterEvenNumbers(arr3) {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
      newArr = arr3[i];
      console.log();
    }
  }
}
filterEvenNumbers(arr3);

// 8. Modify Object Property: Given a person object with properties name and age, write a function celebrateBirthday(person) that increases the person's age by 1.

// 9. Array Manipulation: Write a function removeFirstAndLast(arr) that removes the first and last elements from an array and returns the modified array.

const arr4 = ["John", "Peter", "Emmanuel", "Shanks"];

function removeFirstAndLast(arr4) {
  arr4.shift();
  arr4.pop();
  console.log(arr4);
}

removeFirstAndLast(arr4);

// 10. Function inside Object: Add a method introduce() to the person object that prints "Hi, I am <name> and I am <age> years old!".

const kadibia = {
  name: "kadibia",
  age: "22",

  greet: function () {
    const greet = `Hi, I am ${this.name}, and I am ${this.age} years old!`;
    return greet;
  },
};
console.log(kadibia.greet());

// 11. Nested Loops: Write a function multiplyTable(n) that prints a multiplication table for numbers from 1 to n

// 12. Combining Arrays and Loops: Write a function mergeArrays(arr1, arr2) that takes two arrays and returns a single array with all elements from both arrays.

const arrOfFruits = ["Mango", "Orange", "Pineapple"];
const arrOfFoods = ["Beans", "Yam", "Rice"];

function mergeArray(arraOfFruits, arrOfFoods) {
  const arrMerged = arrOfFruits.concat(arrOfFoods);
  return arrMerged;
}
const mergedArray = mergeArray(arrOfFruits, arrOfFoods);
console.log(mergedArray);

// 13. Searching in an Array: Write a function findStudentByName(students, name) that searches for a student by name in an array of student objects and returns the student object if found, or null if not found.

const stud = [
  {
    name: "Chima Grace",
    age: 22,
    grade: "A",
  },
  {
    name: "James Gabriel",
    age: 25,
    grade: "A",
  },
  {
    name: "Chioma Okoro",
    age: 21,
    grade: "A",
  },
];

const findStudentByName = function (stud, name) {
  for (let i = 0; i < stud.length; i++) {}
};

// 14. Conditional with Objects: Write a function checkPassing(students) that takes an array of students and returns a list of students with grade >= 50.

const studentsGrade = [
  40, 60, 45, 70, 69, 58, 32, 50, 61, 57, 50, 32, 70, 67, 45, 56, 54,
];

function checkPassing(studentsGrade) {
  for (let i = 0; i < studentsGrade.length; i++) {
    if (studentsGrade[i] >= 50) {
      console.log(`Student ${i} (${studentsGrade[i]})`);
    }
  }
}
checkPassing(studentsGrade);

// 15. Object with Array Property: Modify the car object to have a features array (e.g., ["air conditioning", "navigation"]). Write a function printCarFeatures(car) that prints all features of the car.

let car2 = [];
car2 = car2.push("air conditioning", "navigation");
function printCarFeatures(car) {
  console.log(car);
}
printCarFeatures(car);

// 16. Array of Functions: Write an array mathOperations with functions for addition, subtraction, multiplication, and division. Write a function executeOperations(arr, a, b) that calls each function with the arguments a and b and prints the results.

// 17. Higher-Order Functions: Write a function filterArray(arr, callback) that takes an array and a callback function and returns a new array where the callback function returns true.

// 18. Object in Loop: Write a function updateGrades(students, bonus) that loops through the students and increases their grades by the bonus amount.

// 19. Recursion: Write a recursive function factorial(n) that returns the factorial of a number.

// 20. Array of Objects Manipulation: Write a function promoteStudents(students) that increases the grade of each student in an array by 10%, but caps it at 100.

// 21. Sorting an Array: Write a function sortStudentsByGrade(students) that sorts an array of student objects by their grade in descending order.

// 22. Combining Array Methods: Write a function averageGrade(students) that calculates the average grade of all students using map() and reduce().

// 23. Nested Objects: Create a school object that contains an array of classroom objects. Each classroom has a name and a list of students. Write a function printClassrooms(school) that prints the classroom names and their student counts.

// 24. Array Filtering with Conditions: Write a function filterPassingStudentsInClass(school, className) that filters and returns the names of students with grades >= 50 in the specified classroom.

// 25. Comprehensive Project: Create a simple "Gradebook" system. You should be able to:
// Add students to the gradebook.
// View all students.
// Search for a student by name.
// Update a student’s grade.
// Filter and display students who are passing (grade >= 50). Use all concepts learned (functions, arrays, objects, loops, conditionals).
