import mapObject from "./mapObject.js";

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

function callbackFunction(key, value) {
    if(key === 'name'){
        return value.toUpperCase();
    }
    else{
        return value;
    }
}

const result = mapObject(testObject, callbackFunction);

console.log(result);