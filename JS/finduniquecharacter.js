var findUniqueCharacter = function (str) {
    if (str.length === 0) return -1;
    
    var store = {};
    
    for (let char of str) {
        store[char] = (store[char] || 0) + 1;
    }

    for (var j = 0; j < str.length; j++) {
        if (store[str[j]] == 1) {
            return j;
        }
    }
    return -1;
}
findUniqueCharacter('aar');

//  Big O
// O(n)
// n = number of chars
// space complexity = o(64) (a-z 32 + A-Z 32)