// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

people.unshift({
  name: { first: "John", middle: "L", last: "Camino" },
  age: 33,
});

console.log(Object.keys(people));
console.log(people[0].name);
console.log(
  `${people[0].name.first}` +
    ` ${people[0].name.middle}` +
    ` ${people[0].name.last}`
);

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.
function avgAge(peopleArr) {
  // Your code here
  let totalAges = 0;
  const numOfAges = peopleArr.length;

  peopleArr.forEach((person) => {
    totalAges += person.age;
  });
  return totalAges / numOfAges;
}

console.log(`${avgAge(people)}`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  // Your code here
}

console.log(fullName(people));

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  // Your code here
}

console.log(olderPeople(people, 26));
