var threeSum = function (nums) {
    let output = [];
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length -2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];
            if (0 == total) {
                output.push([nums[i], nums[left], nums[right]]);
                right--;
                left++;
            } else if (total > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return output;
}

threeSum([-1,0,1,2,-1,-4]);