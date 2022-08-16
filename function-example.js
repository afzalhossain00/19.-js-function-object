/* function functionName (parameters){
    function body
    return
} 
var returendValue = functionName(parameters value)
*/

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 52;
const assignment2Marks = 55;
const assignment3Marks = 57;
var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
var marks = myAverage.toFixed(2)
console.log('My average assignment marks so far:', marks);


function add(num1, num2) {
    console.log(num1, num2);
    const sum = num1 + num2;
    return sum;
}
const result1 = add(15, 25);
const result2 = add(25, 25);
const finalResult = add(result1, result2);
console.log('total', finalResult);