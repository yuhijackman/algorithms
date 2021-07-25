function coinChange(coins, amount) {
    let track = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER);
    track[0] = 0
    for (let i = 1; i < track.length; i++) {
        for (coin of coins) {
            if (coin <= i) {
                track[i] = Math.min(track[i], track[i - coin] + 1)
            }
        }
    }
    const minCoins = track[amount];
    if (minCoins >= Number.MAX_SAFE_INTEGER) return -1;
    return minCoins;
}

console.log(coinChange([1,2,5], 15));

