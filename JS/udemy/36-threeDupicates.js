function areThereDuplicates(...args) {
  if (args.length < 2) return true
  let store = {}
  for (let num of args) {
    if (store[num.toString()]) {
      return true
    } else {
      store[num.toString()] = true
    }
  }
}

// Multi pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// One liner
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}