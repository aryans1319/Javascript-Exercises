```
 ### 1. Declare an empty array

const arr = [];
console.log(arr);

Declare an array with more than 5 number of elements
Find the length of your array

const arr = [1,2,3,4,5,6];
console.log('Length: ', arr.length);

Get the first item, the middle item and the last item of the array

const arr = [1,2,3,"Aryan",5,6];

const first = arr[0];
const last = arr[5];

const mid = arr.length / 2;

console.log('First: ', first);
console.log('Mid: ', arr[mid]);
console.log('Last: ', last);

Declare an array called mixedDataTypes, put different data types in the 
array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Aryan', true, 1, 0.1,'Shaw', false, 'pro'];

const len = mixedDataTypes.length;
console.log(len);

Declare an array variable name itCompanies and assign initial values Facebook, Google, 
Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);
const len = itCompanies.length;
console.log(len);

// first company
console.log(itCompanies[0]);
// last company
console.log(itCompanies[itCompanies.length-1]);
// middle company
const mid = Math.floor(len/2);
// console.log(mid);
console.log(itCompanies[mid]);

for(let i=0 ; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase() + ' ');
}
Print the array like as a sentence: Facebook, Google, 
Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

Method - 1

let oneLine = itCompanies.toString();
console.log(oneLine);

Method - 2
console.log(itCompanies.toString());

Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found

console.log(itCompanies.includes('apple'));


Filter out companies which have more than one 'o' without the filter method
function countString(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
const filteredCompanies = []; 
for(let i = 0; i<itCompanies.length; i++){
    if(countString(itCompanies[i], 'o') > 1){
        filteredCompanies.push(itCompanies[i]);
    }
}

console.log(filteredCompanies);

Sorting the array

itCompanies.sort();
console.log(itCompanies.toString());

// Reverse the array

itCompanies.reverse();
console.log(itCompanies.toString());

Slice out the first 3 companies from the array

Slice(a,b,c) first parameter = position
             second parameter = no of items
             third parameter = replaced items to be placed ( if applicable )
itCompanies.splice(0,3);
console.log(itCompanies);

Slice out the last 3 companies from the array

itCompanies.splice(4,3);
console.log(itCompanies);

// use -ve to slice from end
itCompanies.splice(6,-3);
console.log(itCompanies);

Slice out the middle IT company or companies from the array

itCompanies.splice(3,1);
console.log(itCompanies.toString());

Remove the first IT company from the array

itCompanies.shift();
console.log(itCompanies);

Remove the middle IT company or companies from the array

itCompanies.splice(3,1);
console.log(itCompanies);


Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

Remove all IT companies

Method 1

itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);

Method 2

while(itCompanies.length > 0){
    itCompanies.pop();
}
console.log(itCompanies);

```

