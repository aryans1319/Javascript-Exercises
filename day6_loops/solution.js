/*
Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

Write a loop that makes the following pattern using console.log():

#
##
###
####
#####
######
#######


let ans = "";
for(let i=1;i<8;i++){
    for(let j=0;j<i;j++){
        ans+="#"
    }
    ans+="\n";
}
console.log(ans);

Use loop to print the following pattern:

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i*i}`);
}

Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

 

for(let i = 0; i< 10 ; i++){
    console.log(`${i}   ${i*i}   ${i*i*i}`);
}



 // Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0;i<=100;i++) {
    if(i%2 == 0){
        console.log(`${i}`);
    }
}



for(let i=0;i<=100;i++) {
    if(i%2 != 0){
        console.log(`${i}`);
    }
}




// Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(n){
    let flag = true;
    if(n == 1) return false;
    else if(n > 1){
    for(let i=2; i < n;i++){
        if(n % i == 0){
            flag = false;
            break;
        }
    }
}
    if(flag){
        return true;
    }
    return false;
}

for (let i = 1; i <= 100; i++) {
    if(isPrime(i)){
        console.log(`${i}`);
    }
}

*/
