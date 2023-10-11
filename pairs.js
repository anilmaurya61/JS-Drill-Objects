function pairs(obj) {
    let outputPairs =[];
    for(let key in obj){
        outputPairs.push([key, obj[key]]);
    }
    return outputPairs;
}

export default pairs;