function capitalizeFirst (arr) {
  if (arr.length === 0) return null;
  let upper = [arr[0][0].toUpperCase() + arr[0].slice(1)];
  if (!arr[1]) return upper;
  return  upper.concat(capitalizeFirst(arr.slice(1)));
}
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
