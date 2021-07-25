function maxSubarraySum(arr, num) {
  if (num > arr.length) return null
  let tempSum = 0
  let i = 0
  while (i < num) {
    tempSum += arr[i]
    i++
  }
  let maxSum = tempSum
  for (let j = num; j < arr.length; j++) {
    tempSum = arr[j] + tempSum - arr[j - num]
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum
}

maxSubarraySum([100,200,300,400], 2)