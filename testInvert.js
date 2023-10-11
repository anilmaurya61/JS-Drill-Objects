import invert from "./invert.js";

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

const invertObject = invert(testObject);

console.log(invertObject);