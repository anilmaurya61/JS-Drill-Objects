import keys from "./keys.js";

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

const outputKeys = keys(testObject);

console.log(outputKeys);