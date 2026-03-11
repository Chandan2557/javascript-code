/* 
//Q1 

let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let op = prompt("+, -, *, /, %,");
let c;

if (op == "+") {
    alert(c = (a + b));
}
else if (op == "-") {
    alert(c = (a - b));
}
else if (op == "*") {
    alert(c = (a * b));
}
else if (op == "/") {
    alert(c = (a / b));
}
else if (op == "%") {
    alert(c = (a%b));
}

//Q2
let a = Number(prompt("Enter first number 1-7"));
if(a === 1){
    alert("Monday");
}
else if(a === 2){
    alert("Tuesday");
}
else if(a === 3){
    alert("Wesnesday");
}
else if(a === 1){
    alert("Thusday");
}
else if(a === 1){
    alert("Friday");
}
else if(a === 1){
    alert("Staturday");
}
else if(a === 1){
    alert("Sunday");
}
else{
    alert("Invalid Number");
}

//Q3
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a > b && a > c) {
    alert("a is grater than b and c");
} else if (b > a && b > c) {
    alert("b is grater than a and c");
} else {
    alert("c is grater than a and b");
}

//Q4
let a = Number(prompt("Enter your mark"));
if(a > 33 && a < 46){
    alert("Grade D")
}

else if(a > 46 && a < 60){
    alert("Grade C")
}

else if(a > 60 && a < 70){
    alert("Grade B")
}

else if(a > 70 && a < 85){
    alert("Grade A")
}

else if(a > 85 && a < 95){
    alert("Grade C")
}

else if(a > 95 && a < 100){
    alert("Grade A+")
}

//Q5
let a = Number(prompt("Enter first number:"));
if(a%5 ===  0){
    alert("Yes this number divisble by 5");
}else{
        alert("No this number is not divisble by 5");
}


//Q6
let a = Number(prompt("Enter first number:"));
if(a%3 === 0 && a%7 === 0){
    alert("Yes this number multiple by 3 and 7");
}else{
        alert("No this number is not divisble by 5");
}


//Q7
let a = Number(prompt("Enter first number:"));
if(a > 33){
        alert("Yes Student is Passed");
}else{
        alert("Student is Not Passed");
}
  

//Q8
let Year = Number(prompt("Enter Year:"));
if(Year % 4 === 0){
    alert("It is a leap year");
}
else if(Year % 400 === 0){
    alert("It is a leap year");
}
else if(Year % 100 === 0){
    alert("It is not a leap year")
}
else{
    alert("not ")
}


//Q9
let num = Number(prompt("Enter a number:"));
if (num >= 100 && num <= 999) {
    alert("It is a three-digit number.");
} else if (num <= -100 && num >= -999) {
    alert("It is a three-digit number.");
} else {
    alert("It is NOT a three-digit number.");
}


//Q10
let Age = Number(prompt("Enter your age:"));
if(Age >= 18){
    alert("Yes you are eligible for vote")
}else{
        alert("you are not eligible for vote")
}


//Q11
let vowel =prompt("Enter your character:");
if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
    alert("character is vowel")
}else {
        alert("character is consonant")
}


//Q12
let n1 = Number(prompt("Enter your Number:"));
if(n1%2 === 0){ 
        alert("it's prime number")
}else{
        alert("it's odd numberi")
}

//Q13
let num = prompt("Enter Number");
for( let i=20; i>=num; i++){
    console.log(i);
}

//Q14
let units = Number(prompt("Enter your Units:"));
if (units >= 0 && units <= 100) {
    alert("Free Billl");
} else if (units >= 100 && units <= 200) {
    units = units - 100;
    units = units * 5;
    alert("your bill is " + units)
}
else if (units >= 200 && units <= 250) {
    units = units - 100;
    units = units * 7;
    alert("your bill is " + units)
} else if (units >= 250 && units <= 300) {
    units = units - 100;
    units = units * 10
    ;
    alert("your bill is " + units)
}
else {
    units = units - 100;
    units = units * 30;

    alert("your bill is " + units)
}

//Q15   
let num = prompt("Enter Number");
for( let i=1; i<=num; i++){
    console.log(i);
}

//Q16. 
let num = prompt("Enter Number");
for( let i=20; i>=num; i++){
    console.log(i);
}


//Q17. 
let num = prompt("Enter Number");
for (let i = 1; i <= num; i++) {
    i += i;
}
console.log(sum)
//Q18
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}
//Q19
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum =", sum);

//Q19
let sum = 0;
for (let i = 1; i <= 50; i += 2) {
    sum += i;
}
console.log("Sum of odd numbers =", sum);

//Q20
let num = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
//Q21
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count++;
    }
}
console.log("Total numbers divisible by 3 =", count);

//Q22 let num = Number(prompt("Enter a number:"));
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}

//Q23. Print all prime numbers between 1 and 100
for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

//Q24. Reverse a given number
let num = Number(prompt("Enter a number:"));
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num - digit) / 10;}
console.log("Reversed number =", reverse);
}
//Q25. Check if a number is palindrome
let original = Number(prompt("Enter a number:"));
let num = original;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num - digit) / 10;
}
if (original === reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome");
}

//Q26. Count digits in a number
let num = Number(prompt("Enter a number:"));
let count = 0;

while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
}

console.log("Total digits =", count);

//Q27. Find sum of digits of a number
let num = Number(prompt("Enter a number:"));
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits =", sum);

//Q28. Print Fibonacci series up to N terms
let n = Number(prompt("Enter number of terms:"));
let a = 0, b = 1;
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

//Q29. Find the largest number in an array
let arr = [10, 45, 2, 89, 34];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number =", largest);

//Q30. Find the smallest number in an array
let arr = [10, 45, 2, 89, 34];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log("Smallest number =", smallest);
*/



































