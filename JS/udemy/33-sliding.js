function maxSubarraySum(arr, num) {
  if (arr.length < num) return null
  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)) // 19