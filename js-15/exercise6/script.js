// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];
const body = document.body;
function printPersons(arr) {
  arr.forEach((person) => {
    const p = document.createElement("p");
    p.textContent = `name ${person.name} age ${person.age}`;
    body.appendChild(p);
  });
}
printPersons(persons);
