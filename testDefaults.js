import defaults from "./defaults.js";

const testObject = { name: 'Bruce Wayne', age: 36,};
const defaultProps = {name: 'John', age: 0, location: 'BLR' };

const result = defaults(testObject, defaultProps);

console.log(result);