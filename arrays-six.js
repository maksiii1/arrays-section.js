const showPerson = (arr) => {
  for (let key of arr) {
    console.log(`Имя: ${key.name}, возраст: ${key.age}`);
  }
};

const arrPersons = [
  { name: "Simon", age: 20 },
  { name: "Sofia", age: 19 },
  { name: "Elizabet", age: 18 },
];

showPerson(arrPersons);
