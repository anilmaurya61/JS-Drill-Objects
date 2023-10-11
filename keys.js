function keys(obj) {
    if(typeof obj === 'object'){
        let outputKeys =[];
        for(let key in obj) {
            outputKeys.push(key);
        }
        return outputKeys;
    }
    else{
        return null;
    }
}

export default keys;

