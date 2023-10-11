function invert(obj) {
    let invertObject = {};
    for(let key in obj){
        invertObject[obj[key]] = key;
    }
    return invertObject;
}

export default invert;