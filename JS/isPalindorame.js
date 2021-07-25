var palindrome = function (str) {
    // recyle the space by using the same variable
    str = str.replace(/[^\w]/gi, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] == str[right]) {
            left += 1;
            right -= 1;
        } else {
            return false;
        }
    }
    return true;
}
palindrome('aarbaa');