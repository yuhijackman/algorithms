var groupAnagrams = function (strs) {
    let result = [];
    let store = {};
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!store[sortedStr]) store[sortedStr] = [];
        store[sortedStr].push(str);
    }
    return Object.values(store);
}

groupAnagrams(['ab', 'ba', 'bc', 'cd', 'dc']);