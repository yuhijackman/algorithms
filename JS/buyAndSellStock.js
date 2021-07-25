function getMaxProfit(arr) {
    if (arr.length <= 1) return 0;
    let lowest = arr[0];
    let best = Number.MIN_SAFE_INTEGER;

    for (let i=1; i < arr.length; i++) {
        let tempBest = arr[i] - lowest;
        best = Math.max(tempBest, best);
        lowest = Math.min(arr[i], lowest);
    }
    return best;
}

console.log(this.getMaxProfit([7, 1, 5, 3, 6, 4]));