function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let sorted = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            sorted.push(arr2[j]);
            j++;
        } else {
            sorted.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
    }

    return sorted;
}
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2); //2
    let left = mergeSort(arr.slice(0, mid));// left
    let right = mergeSort(arr.slice(mid));// right
    return merge(left, right);
}


console.log(mergeSort([3,1,7,5]));