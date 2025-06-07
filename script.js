let name = "Lilianna";
let age = 13;
let isStudent = true;
let hobbies = ["reading", "gaming", "skeatching", "beading"];
let faveColor = "Pale royale blue";
let favefood = "curry";
let likesSushi = true;

function greeting() {
    console.log(`Hello, my name is ${name}.`);
    console.log(`I am ${age} years old.`);
    console.log(`Is it true that I am a student? ${isStudent}`);
    console.log(`My hobbies include: ${hobbies.join(", ")}.`);
    console.log(`My favorite color is ${faveColor}.`);
    console.log(`My favorite food is ${favefood}.`);
    console.log(`Do I like sushi? ${likesSushi}`);
}

function greeting(name) {
    console.log("hello", name);
}

greeting('Lilianna');
function saveName() {
    let newName = document.getElementById("greeter").value; // text feild value from user input
    document.getElementById('username').textContent = newName;
    document.getElementById('greeter').value = ""; // clear the input field
}
let me = "Lilianna";
console.log(`Hello, my name is ${me}.`);
console.log(`I am ${age} years old.`);
console.log(`Is it true that I am a student? ${isStudent}`);
console.log(`My hobbies include: ${hobbies.join(", ")}.`);
console.log(`My favorite color is ${faveColor}.`);
console.log(`My favorite food is ${favefood}.`);
console.log(`Do I like sushi? ${likesSushi}`);
