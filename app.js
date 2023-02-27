// Data Type Check 
var firstName = "Amzad Hossain";
console.log(typeof firstName);

// data type change 
var number = 71.44;
var number2 = 50;
console.log(parseInt(number));
var totalNumber = number + number2;
console.log(parseInt(totalNumber));

// IF ELSE STATEMENT
var actor = 'Hero alam';
if (actor == 'Hero alam') {
    console.log('marbo boguray las porbe maguray');
}
else if (actor == 'mituhun') {
    console.log('marbo aikhane las porbe sosane');
}
else {
    console.log('maramari kora uchit na');
}

// Nasted if else
var tamim = 80;
if (tamim > 0) {
    if (tamim == 80) {
        console.log("I got GPA 5");
    }
}

else {
    console.log("Number can not be nagative")
}

// Grading system
var result = 79;
if (result < 33 && result >= 0) {
    console.log("F Grade");
}
else if (result >= 33 && result < 40) {
    console.log("D Grade");
}
else if (result >= 40 && result < 50) {
    console.log("C Grade");
}
else if (result >= 50 && result < 60) {
    console.log("B Grade");
}
else if (result >= 60 && result < 70) {
    console.log("A- Grade ");
}
else if (result >= 70 && result < 80) {
    console.log("A Grade");
}
else if (result >= 80 && result < 95) {
    console.log("A+ Grade")
}

// spacipic condition output 
var friends = ['adnan', 'sakib', 'shuvo', 'ananta jalil']
var largestF = [0];
for (var i = 0; i < friends.length; i++) {
    var element = friends[i];

    if (element.length > largestF.length) {
        largestF = element;
    }

}
console.log(largestF);

// Lopp Statement 
var participent = ['sakib', 'tamim', 'Mushfiq', 'Mahmudullah', 'Taskin', 'Mustafiz', 'Afif'];
for (var i = 0; i < participent.length; i++) {
    var attented = participent[i];
    console.log(attented);
} 