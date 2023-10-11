function values(obj) {
   if(typeof obj === 'object'){
        let outputValues = [];
        for(let key in obj){
            outputValues.push(obj[key]);
        }
        return outputValues;
   }
   else{
    return null;
   }
}

export default values;