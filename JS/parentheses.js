var isValid = function (s) {
    let stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            let last = stack.pop();
            if (pairs[last] != char) return false;
        }
    }
    if (stack.length) {
        return false;
    } else {
        return true;
    }
}