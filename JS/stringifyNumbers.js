function stringifyNumbers(obj,newobj = {}) {
 for (key in obj) {
   if (typeof obj[key] === 'number') {
       newobj[key] = obj[key].toString();
   } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
       newobj[key] = stringifyNumbers(obj[key]);
   } else {
      newobj[key] = obj[key];
   }
 }
  return newobj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));
