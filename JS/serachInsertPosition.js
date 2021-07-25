var searchInsert = function (arr, target) {
    let low = 0;
    let hi = arr.length - 1;

    while (low <= hi) {
        let mid = Math.floor((low + hi) / 2);
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return low;
}

// 3
console.log(searchInsert([2,5,7,9], 8));
// 2
console.log(searchInsert([2,5,7,9], 7));