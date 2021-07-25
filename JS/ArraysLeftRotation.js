// Complete the rotLeft function below.
function rotLeft(a, d) {
    if (a.length <= 1) return a;
    if (d === 0) return a
    let result = [];
    let hash = {};
    for (let i = 0; i < a.length; i++) {
        let key = i - d;
        if (key < 0) {
            key = a.length + key;
        }
        hash[key] = a[i];
    }
    Object.keys(hash).forEach(k => result.push(hash[k]));
    return result;
}

rotLeft([1,2,3,4,5], 4)// [5, 1, 2, 3,4]