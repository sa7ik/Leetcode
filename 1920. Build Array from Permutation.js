var buildArray = function(nums) {
    var output=[]
    for (var i=0;i<nums.length;i++){
        output[i] = nums[nums[i]]
    }
    return output
};