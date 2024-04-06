let a = 1000;
let b = 2000;
let c = 3400;


// 1.Write a js program to find the maximum between two numbers.
document.write("<h2>1.Write a js program to find the maximum between two numbers.</h2>");

    if (a > b) {
        document.write("<h2>Answer: A is Greater than B.</h2>");
    } else if(b > a) {
        document.write("<h2>Answer: B is Greater than A.</h2>");
    }else{
        document.write("<h2>Please Enter Numbers.</h2>");
    }
     document.write("</br>");


// 2.Write a js program to find the maximum between three numbers.
document.write("<h2>2.Write a js program to find the maximum between three numbers.</h2>");

if (a > b && a > c) {
    document.write("<h2>Answer: A is Greater than B & C.</h2>");
} else if (b > a && b > c) {
    document.write("<h2>Answer: B is Greater than A & C.</h2>");
} else if(c > a && c > b) {
    document.write("<h2>Answer: C is Greater than A & B.</h2>");
}else{
    document.write("<h2>Please Enter Numbers.</h2>")
}
document.write("</br>");


// // 3.Write a js program to check whether a number is negative, positive or
// // zero.
let d = -76;

document.write("<h2>3.Write a js program to check whether a number is negative, positive or zero.</h2>");

if (d > 0) {
    document.write("<h2>Answer: Value is Positive.");
}else if(d == 0) {
    document.write("<h2>Answer: Value is Zero.</h2>");
}else if (d < 0) {
    document.write("<h2>Answer: Value is Negative.</h2>");
}else{
    document.write("<h2>PLease Enter Numbers</h2>");
}
document.write("</br>");


// 4.Write a js program to check whether a number is divisible by 5 and 11 or
// not
let e = 55;

document.write("<h2>4.Write a js program to check whether a number is divisible by 5 and 11 or not</h2>");

if (e % 5 == 0 && e % 11 == 0) {
    document.write("<h2>Answer: Weldone! Correct Answer.</h2>");
}else{
    document.write("<h2>Enter corect number and Try again.</h2>");
}
document.write("</br>");


// 5.Write a js program to check whether a number is even or odd.
let f = 23;

document.write("<h2>5.Write a js program to check whether a number is even or odd.</h2>");

if (f % 2 == 0) {
    document.write("<h2>Answer: Given Number is Even.</h2>");
}else if (f % 2 == 1) {
    document.write("<h2>Answer: Given Number is Odd.</h2>");
} else{
    document.write("<h2>Sorry! Enter corect number and Try again.</h2>");
}
document.write("</br>");


// 6.Write a js program to check whether a year is leap year or not.
let year = 2024;

document.write("<h2>6.Write a js program to check whether a year is leap year or not.</h2>");

if (year % 4 == 0 && year % 100 == 0) {
    document.write("<h2>Year is Leap Year.</h2>");
}else if(year % 400 == 0){
    document.write("<h2>Year is Leap Year.</h2>");
}else{
    document.write("<h2>Year is Not Leap Year.</h2>");
}
document.write("</br>");


// 7.Write a js program to input any alphabet and check whether it is vowel or
// consonant.
let sting = "a";
let data = sting;

document.write("<h2>7.Write a js program to input any alphabet and check whether it is vowel or consonant.</h2>");

if (sting == "a" || sting == "e" || sting == "i" || sting == "o" || sting == "u" || sting == "A" || sting == "E" || sting == "I" || sting == "O" || sting == "U") {
    document.write("<h2>Answer: It is vowel.</h2>");
}else {
    document.write("<h2>Answer: It is consonant.</h2>");
}
document.write("</br>");


// 8.Write a js program to check whether a character is uppercase or
// lowercase alphabet.

document.write("<h2>8.Write a js program to check whether a character is uppercase or lowercase alphabet.</h2>");

if (sting == data.toUpperCase()) {
    document.write("<h2>Answer: Chracter is UpperCase.</h2>");
}else if (sting == data.toLowerCase()) {
    document.write("<h2>Answer: Character is LowerCase.</h2>");
}else {
    document.write("<h2>Sorry! Please enter at least one character.</h2>");
}
document.write("</br>");


// 9.Write a js program to input the week number and print weekday.
let WeekDay = 5;

document.write("<h2>9.Write a js program to input the week number and print weekday.</h2>");

if (WeekDay == 0) {
    document.write("<h2>Answer: Today is Sunday.</h2>");
}else if (WeekDay == 1) {
    document.write("<h2>Answer: Today is Monday.</h2>");
} else if (WeekDay == 2) {
    document.write("<h2>Answer: Today is Tuesday.</h2>");
} else if (WeekDay == 3) {
    document.write("<h2>Answer: Today is Wednesday.</h2>");
} else if (WeekDay == 4) {
    document.write("<h2>Answer: Today is Thrusday.</h2>");
} else if (WeekDay == 5) {
    document.write("<h2>Answer: Today is Friday.</h2>");
}else if (WeekDay == 6) {
    document.write("<h2>Answer: Today is Saturday.</h2>");
} else{
    document.write("<h2>Sorry! Please enter number between 0 to 7.</h2>");
}
document.write("</br>");


// 10.Write a js program to input the month number and print the number of
// days in that month.
let Month = 3;

document.write("<h2>10.Write a js program to input the month number and print the number of days in that month.</h2>");

if (Month == 0) {
    document.write("<h2>Answer: 31 Days in the Month of January.</h2>");
} else if (Month == 1) {
    document.write("<h2>Answer: 29 Days in the Month of February.</h2>");
} else if (Month == 2) {
    document.write("<h2>Answer: 31 Days in the Month of March.</h2>");
} else if (Month == 3) {
    document.write("<h2>Answer: 30 Days in the Month of April .</h2>");
} else if (Month == 4) {
    document.write("<h2>Answer: 31 Days in the Month of May.</h2>");
}else if (Month == 5) {
    document.write("<h2>Answer: 30 Days in the Month of June.</h2>");
}else if (Month == 6) {
    document.write("<h2>Answer: 31 Days in the Month of July.</h2>");
}else if (Month == 7) {
    document.write("<h2>Answer: 31 Days in the Month of August.</h2>");
}else if (Month == 8) {
    document.write("<h2>Answer: 30 Days in the Month of September.</h2>");
}else if (Month == 9) {
    document.write("<h2>Answer: 31 Days in the Month of October.</h2>");
}else if (Month == 10) {
    document.write("<h2>Answer: 30 Days in the Month of November.</h2>");
}else if (Month == 11) {
    document.write("<h2>Answer: 31 Days in the Month of December.</h2>");
}
 else{
    document.write("<h2>Sorry! Please enter number between 0 to 11.</h2>");
}
document.write("</br>");

// 11.Write a js program to count a minimum number of notes in a given
// amount.
document.write("<h2>11.Write a js program to count a minimum number of notes in a given amount.</h2>");

document.write("</br>");


// 12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
let phy = 80;
let chem = 70;
let bio = 60;
let math = 55;
let comp = 88;

let total = 500;
let sum = phy + chem + bio + math + comp;
let per = sum / total * 100;

document.write("<h2>12.Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer. Calculate percentage and grade according to the following:</h2>");
document.write("<h2>Percentage >= 90% : Grade A</h2>");
document.write("<h2>Percentage >= 80% : Grade B</h2>");
document.write("<h2>Percentage >= 70% : Grade C</h2>");
document.write("<h2>Percentage >= 60% : Grade D</h2>");
document.write("<h2>Percentage >= 40% : Grade E</h2>");
document.write("<h2>Percentage < 40% : Grade F</h2>");

if (per >= 90 && per < 100) {
    document.write("<h2>Answer: Congratulation! Grade A</h2>");
}else if (per >= 80 && per < 90) {
    document.write("<h2>Answer: Congratulation! Grade B</h2>");
}else if (per >= 70 && per < 80) {
    document.write("<h2>Answer: Congratulation! Grade C</h2>");
}else if (per >= 60 && per < 70) {
    document.write("<h2>Answer: Congratulation! Grade D</h2>");
}else if (per >= 40 && per < 60) {
    document.write("<h2>Answer: You Passed Grade E</h2>");
}else if (per < 40) {
    document.write("<h2>Answer: You Fail Grade F</h2>");
}
document.write("</br>");


// 13.Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

document.write("<h2>13.Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:</h2>");
document.write("<h2>Basic Salary <= 10000 : HRA = 20%, DA = 80%</h2>");
document.write("<h2>Basic Salary <= 20000 : HRA = 25%, DA = 90%</h2>");
document.write("<h2>Basic Salary > 20000 : HRA = 30%, DA = 95%</h2>");


document.write("</br>");

// 14.Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

document.write("<h2>14.Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:</h2>");
document.write("<h2>For the first 50 units Rs. 0.50/unit</h2>");
document.write("<h2>For the next 100 units Rs. 0.75/unit</h2>");
document.write("<h2>For the next 100 units Rs. 1.20/unit</h2>");
document.write("<h2>For units above 250 Rs. 1.50/unit</h2>");
document.write("<h2>An additional surcharge of 20% is added to the bill</h2>");

let unit = 170;
let rate50 = 0.50;
let rate150 = 0.75;
let rate250 = 1.20;
let rateHigh = 1.50;
let taxRatio = 20/100;
if (unit > 0 && unit <= 50) {
    let unitsAmount = unit * rate50;
    let taxAmount = unitsAmount * taxRatio;
    let netAmount = unitsAmount + taxAmount;
    document.write("<h2>Answer: Net Amount of Bill is " + netAmount + " Rupees.</h2>");
}else if (unit > 50 && unit <= 150) {
    let unitsAmount = unit * rate150;
    let taxAmount = unitsAmount * taxRatio;
    let netAmount = unitsAmount + taxAmount;
    document.write("<h2>Answer: Net Amount of Bill is " + netAmount + " Rupees.</h2>");
}else if (unit > 150 && unit <= 250) {
    let unitsAmount = unit * rate250;
    let taxAmount = unitsAmount * taxRatio;
    let netAmount = unitsAmount + taxAmount;
    document.write("<h2>Answer: Net Amount of Bill is " + netAmount + " Rupees.</h2>");
}else if (unit > 250) {
    let unitsAmount = unit * rateHigh;
    let taxAmount = unitsAmount * taxRatio;
    let netAmount = unitsAmount + taxAmount;
    document.write("<h2>Answer: Net Amount of Bill is " + netAmount + " Rupees.</h2>");
}else{
    document.write("Please Enter Units from 1 to Above.");
}

document.write("</br>");