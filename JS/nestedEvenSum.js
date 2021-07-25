function nestedEvenSum (obj, sum = 0) {
  for (var key in obj) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) {     
          sum += obj[key];
      } else if (typeof obj[key] === "object") {
          sum += nestedEvenSum(obj[key])
      }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
console.log(nestedEvenSum(obj1));