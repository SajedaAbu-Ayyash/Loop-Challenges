// 1. Print odds 1-20
for (i = 1; i <= 20; i+= 2) {
    console.log(i);
}

// 2. Decreasing Multiples of 3
for (i = 100; i >= 0; i -=3) {
    if(i % 3 === 0){
        console.log(i);
    }
}

// 3.Print the sequence
var sequence = [4,2.5,1,-0.5,-2,-3.5];
for(i = 0; i < sequence.length; i++){
    console.log(sequence[i]);
}

// 4.Sigma
var sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
} 
console.log(sum);

// 5.Factorial
var count = 1;
for(i = 1; i <=12; i++){
    count *= i;
}
console.log(count);
