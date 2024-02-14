function hourglassSum(arr) {
    // Write your code here
    //traversing the hourglass
    let hourGlassCenter;
    var listOfSums = [];
    for(let i = 1; i <= 4; i++){ // vertical traversal
        for(let j=1; j <= 4; j++) {//horizontal traversal
            let sum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            listOfSums.push(sum);
        }
       
    }
    let max = listOfSums[0]; // Initialize max to the first element of the array

    for (let i = 1; i < listOfSums.length; i++) {
        if (listOfSums[i] > max) {
            max = listOfSums[i]; // Update max if a larger value is found
        }
    }

    return max; // Return the maximum value found

}
let test = [
    [0,0,0,0,0,0], 
    [1,2,1,3,1,4],
    [0,0,0,0,0,0], 
    [1,2,1,3,1,4], 
    [0,0,0,0,0,0], 
    [1,2,1,3,1,4],
]   
let output = hourglassSum(test);
console.log(output)