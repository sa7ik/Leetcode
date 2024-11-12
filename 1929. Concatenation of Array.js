var getConcatenation = function(nums) {
    const newnum=nums.length
    for (let i=0;i<newnum;i++){
        nums.push(nums[i])
    }
    return nums
};