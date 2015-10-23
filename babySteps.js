var nums = process.argv.slice(2);
var numLength = nums.length;
if (numLength == 0) {
    console.log("You need to specify numbers as arguments!");
}
else {
    var sum = 0;
    for (var i = 0; i < numLength; i++) {
        sum += +nums[i];
    }
    console.log(sum);
}