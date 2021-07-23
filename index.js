// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("A:" + Array.isArray(a));
console.log("B:" + Array.isArray(b));
console.log("\n");

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
var concatenatedText='[';
// TODO should output [2,4,6,8,10]
for(let x = 0; x < a.length; x++)
{
    a[x]*=2;
    concatenatedText += a[x] + (x<(a.length-1)?',':null);
}
console.log(concatenatedText+']');
console.log("\n");

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var case1 = '\'';
var case2 = '\'';
var case3 = '\'';
//TODO 
// case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
for(let y = 0; y < colors.length; y++)
{
	case1 += colors[y] + (y<(colors.length-1)?' ':'');
	case2 += colors[y] + (y<(colors.length-1)?'+':'');
	case3 += colors[y] + (y<(colors.length-1)?',':'');
}
console.log(case1+'\'');
console.log(case2+'\'');
console.log(case3+'\'');
console.log("\n");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a = a.sort((a, b)=> b-a);
concatenatedText = "[";
for(let z = 0; z < a.length; z++)
{
	concatenatedText += a[z] + (z<(a.length-1)?',':'');
}
console.log(concatenatedText +"]");


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,1,1,1,1,1,2,3,3,6,8,9,2,0,0,0];
//TODO should output: 'a'
console.log("\n");
function getHighestFrequency(arr)
{
	return arr.sort((a,b)=>
		arr.filter(v=>v===a).length - arr.filter(v => v===b).length
	).pop();
}
console.log("'" + getHighestFrequency(a) + "'");