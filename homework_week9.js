// Challenge 1: My Mini Profile
let name = "Sunil";
let age = 21;
let favoriteColor = "green";
let isStudent = true;

console.log(`Hi, I'm ${name}. I am ${age} years old. My favorite color is ${favoriteColor.toUpperCase()}.`);


// Challenge 2: My Favorite Things List
let favoriteFoods = ["pizza", "sushi", "ice cream"];
let favoriteHobbies = ["drawing", "cycling", "gaming"];

console.log("First food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);
console.log("Number of foods:", favoriteFoods.length);

console.log("First hobby:", favoriteHobbies[0]);
console.log("Last hobby:", favoriteHobbies[favoriteHobbies.length - 1]);
console.log("Number of hobbies:", favoriteHobbies.length);

favoriteFoods.push("pasta");
favoriteHobbies.push("photography");

console.log("Updated foods:", favoriteFoods);
console.log("Updated hobbies:", favoriteHobbies);


// Challenge 3: My Dream Pet
let dreamPet = {
  name: "Bolt",
  species: "Wolf",
  age: 4,
  skills: ["tracking", "guarding", "jumping"]
};

console.log(`My dream pet is a ${dreamPet.species} named ${dreamPet.name}.`);
console.log("Second skill:", dreamPet.skills[1]);
