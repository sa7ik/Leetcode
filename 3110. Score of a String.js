var scoreOfString = function(s) {
    let ans=0
    for (i=0;i<s.length-1;i++){
        ans += Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    }
    return ans
};